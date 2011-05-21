(function() {
  window.App = Davis(function() {
    var noteList;
    noteList = null;
    this.use(Davis.title);
    this.use(Davis.googleAnalytics);
    return this.bind('start', function() {
      noteList = new NoteListView(Note.toMustache());
      noteList.render();
      this.get('/', function(req) {
        $('#note-form-container').html('<div id="logo"><img src="/images/logo.png"/></div>');
        return req.setTitle('NotePad');
      });
      this.get('/notes', function(req) {
        return req.redirect('/');
      });
      this.get('/notes/new', function(req) {
        var note, noteForm;
        note = new Note;
        noteForm = new NoteFormView(note.toForm());
        return noteForm.render();
      });
      this.get('/notes/:id', function(req) {
        var note, noteForm;
        note = Note.find(req.params['id']);
        noteForm = new NoteFormView(note.toForm());
        return noteForm.render();
      });
      this.post('/notes', function(req) {
        var note;
        note = new Note(req.params['note']);
        return note.save(function() {
          return req.redirect("/notes/" + (this.id()));
        });
      });
      this.put('/notes/:id', function(req) {
        var note;
        note = Note.find(req.params['id']);
        note.attr(req.params['note']);
        return note.save(function() {
          noteList.reload(Note.toMustache());
          return req.redirect("/notes/" + (this.id()));
        });
      });
      return this.del('/notes/:id', function(req) {
        var note;
        note = Note.find(req.params['id']);
        return note.destroy(function() {
          return req.redirect('/notes');
        });
      });
    });
  });
}).call(this);

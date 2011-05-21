window.App = Davis ->
  noteList = null

  @use Davis.title
  @use Davis.googleAnalytics
  
  @bind 'start', ->
    noteList = new NoteListView Note.toMustache()
    noteList.render()

    @get '/', (req) ->
      $('#note-form-container').html '<div id="logo"><img src="/images/logo.png"/></div>'
      req.setTitle 'NotePad'

    @get '/notes', (req) -> req.redirect '/' 

    @get '/notes/new', (req) ->
      note = new Note
      noteForm = new NoteFormView note.toForm()
      noteForm.render()

    @get '/notes/:id', (req) ->
      note = Note.find req.params['id']
      noteForm = new NoteFormView note.toForm()
      noteForm.render()

    @post '/notes', (req) -> 
      note = new Note req.params['note']
      note.save -> req.redirect "/notes/#{@id()}"

    @put '/notes/:id', (req) ->
      note = Note.find req.params['id']
      note.attr req.params['note']
      note.save -> 
        noteList.reload Note.toMustache()
        req.redirect "/notes/#{@id()}"
 
    @del '/notes/:id', (req) ->
      note = Note.find req.params['id']
      note.destroy -> req.redirect '/notes'

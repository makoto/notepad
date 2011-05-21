(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.NoteListView = View("note-list", {
    init: function() {
      var reload;
      reload = __bind(function() {
        return this.reload(Note.toMustache());
      }, this);
      Note.find('add', reload);
      return Note.find('reload', reload);
    }
  });
}).call(this);

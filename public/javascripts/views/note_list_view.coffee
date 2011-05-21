window.NoteListView = View "note-list",
  init: ->
    reload = => @reload Note.toMustache()
    
    Note.find 'add', reload
    Note.find 'reload', reload
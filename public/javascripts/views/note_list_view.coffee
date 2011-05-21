class window.NoteListView extends View

  constructor: (data)->
    super('note-list', data)
    reload = => @reload Note.toMustache()
    Note.find 'add', reload
    Note.find 'reload', reload  

  # This is not working. In the old view.js, it was calling "BeforeRender" twice like below
  # render: function () {
  #   invokeCallback('beforeRender', this);
  #   $(settings.container).html(this.html);
  #   invokeCallback('beforeRender', this);
  # }
  # not sure how to work this around.
  render: -> 
    # Not sure if I have to define method and call super(), when when I did not overwrite anything.
    super()

# with old style view_old.js
# window.NoteListView = View "note-list",
#   init: ->
#     reload = => @reload Note.toMustache()
#     
#     Note.find 'add', reload
#     Note.find 'reload', reload
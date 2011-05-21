window.NoteFormView = View "note-form"
  beforeRender: ->
    @html.find(':submit.delete').click ->
      form = $(@).parents 'form'
      form.attr 'method', 'delete'

# using coffee script inheritance
class window.NoteFormView extends View
  constructor: (data)->
    super('note-form', data)

  render: ->
    @html.find(':submit.delete').click ->
      form = $(@).parents 'form'
      form.attr 'method', 'delete'
    super()

# with old style view_old.js
# window.NoteFormView = View "note-form"
#   beforeRender: ->
#     @html.find(':submit.delete').click ->
#       form = $(@).parents 'form'
#       form.attr 'method', 'delete'

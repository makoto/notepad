class window.View
  constructor: (name, data) ->
    @settings =
      template: "##{name}-template"
      container: "##{name}-container"

    @data = data;
    @template = Handlebars.compile($(@settings.template).text())
    @html = $(@template(@data))
    console.log("HTML1")
    console.log(@html)

  container: -> $(@settings.container)

  reload: (data) -> 
    if (data) then @data = data
    @html = $(@template(@data))
    @render()

  remove: ->
    @html.remove()

  render: ->
    console.log("HTML2")
    console.log(@html)
    $(@settings.container).html(@html)
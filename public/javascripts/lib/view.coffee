class window.View
  constructor: (name, data) ->
    @settings =
      template: "##{name}-template"
      container: "##{name}-container"

    @data = data;
    @template = Handlebars.compile($(@settings.template).text())
    @html = $(@template(@data))

  container: -> $(@settings.container)

  reload: (data) -> 
    if (data) then @data = data
    @html = $(@template(@data))
    @render()

  remove: -> @html.remove()

  render: -> $(@settings.container).html(@html)
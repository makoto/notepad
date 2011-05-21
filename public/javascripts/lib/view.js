(function() {
  window.View = (function() {
    function View(name, data) {
      this.settings = {
        template: "#" + name + "-template",
        container: "#" + name + "-container"
      };
      this.data = data;
      this.template = Handlebars.compile($(this.settings.template).text());
      this.html = $(this.template(this.data));
      console.log("constructing...");
    }
    View.prototype.container = function() {
      console.log("container...");
      return $(this.settings.container);
    };
    View.prototype.reload = function(data) {
      console.log("reload...");
      if (data) {
        this.data = data;
      }
      this.html = $(this.template(this.data));
      return this.render();
    };
    View.prototype.remove = function() {
      return this.html.remove();
    };
    View.prototype.render = function() {
      return $(this.settings.container).html(this.html);
    };
    return View;
  })();
}).call(this);

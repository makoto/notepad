(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  window.NoteFormView = (function() {
    __extends(NoteFormView, View);
    function NoteFormView(data) {
      NoteFormView.__super__.constructor.call(this, 'note-form', data);
    }
    NoteFormView.prototype.render = function() {
      this.html.find(':submit.delete').click(function() {
        var form;
        form = $(this).parents('form');
        return form.attr('method', 'delete');
      });
      return NoteFormView.__super__.render.call(this);
    };
    return NoteFormView;
  })();
}).call(this);

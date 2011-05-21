(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  }, __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.NoteListView = (function() {
    __extends(NoteListView, View);
    function NoteListView(data) {
      var reload;
      NoteListView.__super__.constructor.call(this, 'note-list', data);
      reload = __bind(function() {
        return this.reload(Note.toMustache());
      }, this);
      Note.find('add', reload);
      Note.find('reload', reload);
    }
    NoteListView.prototype.render = function() {
      return NoteListView.__super__.render.call(this);
    };
    return NoteListView;
  })();
}).call(this);

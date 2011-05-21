(function() {
  window.NoteFormView = View("note-form", {
    beforeRender: function() {
      return this.html.find(':submit.delete').click(function() {
        var form;
        form = $(this).parents('form');
        return form.attr('method', 'delete');
      });
    }
  });
}).call(this);

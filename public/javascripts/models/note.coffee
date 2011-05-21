window.Note = Model 'note',{
  persistence: Model.REST "/notes"
  toMustache: ->  notes: @map (note) -> note.attr()
},{
  toForm: ->  
    method: if this.newRecord() then "post"   else "put"
    action: if this.newRecord() then "/notes" else "/notes/#{@id()}"
    note: @attr()  
}
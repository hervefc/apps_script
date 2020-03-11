/** @OnlyCurrentDoc */

function onEdit(e) {
  var range = e.range;
  var column = range.getColumn();
  if (column === 2) {
    range.setBackground('#ffff99');
  }
}

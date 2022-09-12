import jsTPS_Transaction from '../../common/jsTPS.js';
/**
 * MoveSong_Transaction
 *
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
 *
 *
 *
 * @author McKilla Gorilla
 * @author Allen Chen
 */

//  make copies of this class 3 ti,es
//   pne 4 each trasaction

export default class EditSong_Transaction extends jsTPS_Transaction {
  constructor(initModel, initIndex) {
    super();
    this.model = initModel;
    this.index = initIndex;
  }

  doTransaction() {
    console.log(this.index);
    this.model.editSong(this.index);
  }

  undoTransaction() {
    this.model.popEditSongStack(this.index);
  }
}

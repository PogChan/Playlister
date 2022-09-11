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

export default class DeleteSong_Transaction extends jsTPS_Transaction {
  constructor(initModel, initIndex) {
    super();
    this.model = initModel;
    this.index = initIndex;
    this.deleteSongs = [];
  }

  doTransaction() {
    console.log(this.index);
    let song = this.model.getSong(this.index);
    let deleteSongBig = {
      data: song,
      index: this.index,
    };
    console.log(deleteSongBig);
    this.deleteSongs.splice(this.deleteSongs - 1, 0, deleteSongBig);
    this.model.deleteSong(this.index);
  }

  undoTransaction() {
    this.model.popDeletedSongStack(this.deleteSongs);
  }
}

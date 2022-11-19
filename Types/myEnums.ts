
const AISLE=0
const MIDDLE = 1
const WINDOW=2

if(0==AISLE){}

enum SeatChoice {
   AISLE,
   MIDDLE,
   WINDOW,
   Fourth
}
// const hcSeat=SeatChoice.   // when you about to type next word u will get only define options only
const hcSeat = SeatChoice.AISLE

// or this generate to much js code and to avoid that just use const before enum
const enum SeatChoice2 {
   AISLE="aisle",
   MIDDLE=2,
   WINDOW="window",
   Fourth="fourth"
}
const hcSeat2=SeatChoice.AISLE

export{}
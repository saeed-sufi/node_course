
const eve = {
  name: 'Wedding',
  guestList: ['Saeed', 'Ehsan', 'Neda'],
  printGuestList () {
    this.guestList.forEach((guest) => {
      console.log(`${guest} is attending ${this.name}.`)
    })
  },
}
eve.printGuestList()
class Person {
  constructor (firstName, lastName) {
    this.firstName = firstName || 'unknown'
    this.lastName = lastName || 'unknown'
    this.getFullName = () => this.firstName + ' ' + this.lastName
  }

  get FirstName () { return this.firstName }
  set FirstName (value) { this.firstName = value }
  get LastName () { return this.lastName }
  set LastName (value) { this.lastName = value }
}

export default Person

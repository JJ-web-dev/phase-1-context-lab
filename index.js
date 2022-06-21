/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
const createEmployeeRecord = (recArray) => {
    return {
        firstName: recArray[0],
        familyName: recArray[1],
        title: recArray[2],
        payPerHour: recArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = (arrayRec) => {
    return arrayRec.map(record => createEmployeeRecord(record))
}

const createTimeInEvent = function(dateStamp) {
    const [date, hour] = dateStamp.split(' ')
    const inEvent = {
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date: date
    }
    this.timeInEvents.push(inEvent)
    return this
}

const createTimeOutEvent = function(dateStamp) {
    const [date, hour] = dateStamp.split(' ')
    const outEvent = {
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date: date
    }
    this.timeOutEvents.push(outEvent)
    return this
}

const hoursWorkedOnDate = function(targetDate) {
    const inEvent = this.timeInEvents.find(inEvent => inEvent.date === targetDate)
    const OutEvent = this.timeOutEvents.find(inEvent => inEvent.date === targetDate)
    return(OutEvent.hour - inEvent.hour) / 100

}

const wagesEarnedOnDate = function(targetDate) {
    return hoursWorkedOnDate.call(this, targetDate) * this.payPerHour
}

function findEmployeeByFirstName(employees, firstNameString) {
    return employees.find(emp => emp.firstName === firstNameString)
}

function calculatePayroll(employeeRecords) {
    return employeeRecords.map(employee => allWagesFor.call(employee)).reduce((currentValue, total) => currentValue + total)
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


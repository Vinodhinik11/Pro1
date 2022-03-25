const Screen = require('../../screen');

class CreateBookingScreen extends Screen {
    constructor() {
        super();
        this.title = '//h6[contains(text(), "Details")]';
        this.bookingLocation = (location = undefined) => `${location ? `(//*[contains(text(), "${location}")])[1]` : '(//input)[1]'}`;
        this.bookingProduct = (product = undefined) =>  `${product ? `(//*[contains(text(), "${product}")])[1]` : '(//input)[2]'}`;
        this.arrivalDate = '(//input)[3]';
        this.numberOfPeople = '(//input)[4]';
        this.availableSlot = '(//div[@class="mud-chipset"]//div)[1]';
        this.confirmTitle = '//h6[contains(text(), "Confirm")]';
        this.agreeConfirm = '//button/span[contains(text(), "YES")]';
        this.firstName = '(//input[@type="text"])[1]';
        this.lastName = '(//input[@type="text"])[2]';
        this.dob = '(//input[@type="text"])[3]';
        this.email = '(//input[@type="text"])[4]';

        this.confirmEmail = '(//input[@type="text"])[5]';
        this.mobileNumber = '(//input[@type="text"])[6]';
        this.passportNumber = '(//input[@type="text"])[7]';

        this.sex = (sex = undefined) => `${sex ? `(//*[contains(text(), "${sex}")])[1]` : '(//input[@type="text"])[8]'}`;
        this.ethnicity = (ethnicity = undefined) => `${ethnicity ? `(//*[contains(text(), "${ethnicity}")])[1]` : '(//input[@type="text"])[8]'}`;
        this.vaccinationStatus = (vaccinationStatus = undefined) => `${vaccinationStatus ? `(//*[contains(text(), "${vaccinationStatus}")])[1]` : '(//input[@type="text"])[8]'}`;
        this.destination = (destination = undefined) => `${destination ? `(//*[contains(text(), "${destination}")])[1]` : '(//input[@type="text"])[8]'}`;
        this.travelPurpose = (travelPurpose = undefined) => `${travelPurpose ? `(//*[contains(text(), "${travelPurpose}")])[1]` : '(//input[@type="text"])[9]'}`;
        this.numberOfPeopleTravelling = (numberOfPeopleTravelling = undefined) => `${numberOfPeopleTravelling ? `(//*[@class="mud-list-item mud-list-item-gutters mud-list-item-clickable mud-ripple"]//p[contains(text(), "${numberOfPeopleTravelling}")])[1]` : '(//input[@type="text"])[9]'}`;
        this.hearAbout = (hearAbout = undefined) => `${hearAbout ? `(//*[contains(text(), "${hearAbout}")])[1]` : '(//input[@type="text"])[9]'}`;
        this.continuousCough = (continuousCough = undefined) => `${continuousCough ? `(//*[@class="mud-list-item mud-list-item-gutters mud-list-item-clickable mud-ripple"]//p[contains(text(), "${continuousCough}")])[1]` : '(//input[@type="text"])[9]'}`;
        this.changeInSmell = (changeInSmell = undefined) => `${changeInSmell ? `(//*[@class="mud-list-item mud-list-item-gutters mud-list-item-clickable mud-ripple"]//p[contains(text(), "${changeInSmell}")])[1]` : '(//input[@type="text"])[9]'}`;
        this.contactWithSomeOne = (contactWithSomeOne = undefined) => `${contactWithSomeOne ? `(//*[@class="mud-list-item mud-list-item-gutters mud-list-item-clickable mud-ripple"]//p[contains(text(), "${contactWithSomeOne}")])[1]` : '(//input[@type="text"])[9]'}`;
        this.streetAddress = '(//input[@type="text"])[9]';
        this.city = '(//input[@type="text"])[10]';
        this.country = '(//input[@type="text"])[11]'; 
        this.zipCode = '(//input[@type="text"])[12]';
        this.termsCheckBox = ['(//input[@type="checkbox"])[1]', '(//input[@type="checkbox"])[2]', '(//input[@type="checkbox"])[3]', '(//input[@type="checkbox"])[4]', '(//input[@type="checkbox"])[5]','(//input[@type="checkbox"])[6]','(//input[@type="checkbox"])[7]'];
        this.payandbook ='//span[contains(text(),"Book & Pay")]';
        this.email2= '//*[@id="email"]';
        this.cardnumber='//*[@id="cardNumber"]';
        this.expirydate='//*[@id="cardExpiry"]';
        this.cvv='//*[@id="cardCvc"]';
        this.nameoncard='//*[@id="billingName"]';
        this.billingcountry='//*[id@="billingCountry"]';
        this.saveCard='//*[@id="enableStripePass"]';
        this.pay='//button[@type="submit"]';


    }
}

module.exports = CreateBookingScreen;

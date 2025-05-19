import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
// import { PersonTableComponent } from './components/person-table/person-table.component';
// import { Person } from './shared/interfaces/person';
// import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { ListGroupMenuComponent } from './components/list-group-menu/list-group-menu.component';
import { Person } from './shared/interfaces/person';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, ListGroupMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  name = "Markos";

  // Step 1: One way binding of data
  person = {
    givenName: 'Markos',
    surName: 'Karabatsis',
    age: 52,
    email:'marka@aueb.gr'
  }

  // Step 3: Component Input
  person0: Person = {
    givenName: 'Christodoulos',
    surName: 'Fragkoudakis',
    age: 55,
    email:'chfrag@aueb.gr',
    address: 'Athens, Greece'
  }

  person1: Person = {
    givenName: 'John',
    surName: 'Doe',
    age: 32,
    email: 'john@example.com',
    address: 'NeW York, USA' 
  }

//   users: Person[] =[
//     {
//   "givenName": "Brad",
//   "surName": "Piotr",
//   "email": "bpiotr0@hibu.com",
//   "age": 1,
//   "address": "PO Box 68161"
// }, {
//   "givenName": "Hasheem",
//   "surName": "Currington",
//   "email": "hcurrington1@e-recht24.de",
//   "age": 2,
//   "address": "Room 1183"
// }, {
//   "givenName": "Erda",
//   "surName": "Cristofanini",
//   "email": "ecristofanini2@engadget.com",
//   "age": 3,
//   "address": "Room 1781"
// }, {
//   "givenName": "Corrina",
//   "surName": "Bundey",
//   "email": "cbundey3@shareasale.com",
//   "age": 4,
//   "address": "PO Box 87775"
// }, {
//   "givenName": "Corrianne",
//   "surName": "Goncaves",
//   "email": "cgoncaves4@cpanel.net",
//   "age": 5,
//   "address": "1st Floor"
// }, {
//   "givenName": "Robin",
//   "surName": "Heare",
//   "email": "rheare5@discuz.net",
//   "age": 6,
//   "address": "Room 1196"
// }, {
//   "givenName": "Wilma",
//   "surName": "Zavattieri",
//   "email": "wzavattieri6@si.edu",
//   "age": 7,
//   "address": "Room 195"
// }, {
//   "givenName": "Dehlia",
//   "surName": "Marchbank",
//   "email": "dmarchbank7@netlog.com",
//   "age": 8,
//   "address": "Room 1292"
// }, {
//   "givenName": "Nissy",
//   "surName": "Derwin",
//   "email": "nderwin8@blogger.com",
//   "age": 9,
//   "address": "Suite 74"
// }, {
//   "givenName": "Lilas",
//   "surName": "Pickersail",
//   "email": "lpickersail9@taobao.com",
//   "age": 10,
//   "address": "Room 1918"
// }, {
//   "givenName": "Star",
//   "surName": "Gaitone",
//   "email": "sgaitonea@biblegateway.com",
//   "age": 11,
//   "address": "PO Box 6606"
// }, {
//   "givenName": "Gualterio",
//   "surName": "MacGhee",
//   "email": "gmacgheeb@nih.gov",
//   "age": 12,
//   "address": "PO Box 1737"
// }, {
//   "givenName": "Vevay",
//   "surName": "Husbands",
//   "email": "vhusbandsc@dot.gov",
//   "age": 13,
//   "address": "Apt 417"
// }, {
//   "givenName": "Jerrylee",
//   "surName": "Hemshall",
//   "email": "jhemshalld@elpais.com",
//   "age": 14,
//   "address": "Room 1930"
// }, {
//   "givenName": "Henka",
//   "surName": "Trundler",
//   "email": "htrundlere@reference.com",
//   "age": 15,
//   "address": "PO Box 26132"
// }, {
//   "givenName": "Thomasina",
//   "surName": "Kingsford",
//   "email": "tkingsfordf@businesswire.com",
//   "age": 16,
//   "address": "PO Box 85415"
// }, {
//   "givenName": "Thomasina",
//   "surName": "Tejada",
//   "email": "ttejadag@plala.or.jp",
//   "age": 17,
//   "address": "Apt 1541"
// }, {
//   "givenName": "Milzie",
//   "surName": "Tadd",
//   "email": "mtaddh@auda.org.au",
//   "age": 18,
//   "address": "PO Box 29820"
// }, {
//   "givenName": "Berton",
//   "surName": "Luquet",
//   "email": "bluqueti@si.edu",
//   "age": 19,
//   "address": "PO Box 3372"
// }, {
//   "givenName": "Donn",
//   "surName": "Barensen",
//   "email": "dbarensenj@state.tx.us",
//   "age": 20,
//   "address": "PO Box 44696"
// }
//   ]
}

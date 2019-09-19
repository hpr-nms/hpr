import { Injectable } from '@angular/core';

import DataSource from 'devextreme/data/data_source';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DxService {

  constructor(private http: HttpClient) { }
  getCustomers() {
    return customers;
  }
}


export class Customer {
  ID: number;
  Product: string;
  Amount: string;
  Region: string;
  State: string;
  Discount: number;
  Phone: string;
  Channel: string;
  Sector: string;
}

let customers: Customer[] = [{
  "ID": 1,
  "Product": "Super Mart of the West",
  "Amount": "702 SW 8th Street",
  "Region": "Bentonville",
  "State": "Arkansas",
  "Discount": 72716,
  "Phone": "(800) 555-2797",
  "Channel": "(800) 555-2171",
  "Sector": "http://www.noSectorsupermart.com"
}, {
  "ID": 2,
  "Product": "Electronics Depot",
  "Amount": "2455 Paces Ferry Road NW",
  "Region": "Atlanta",
  "State": "Georgia",
  "Discount": 30339,
  "Phone": "(800) 595-3232",
  "Channel": "(800) 595-3231",
  "Sector": "http://www.noSectordepot.com"
}, {
  "ID": 3,
  "Product": "K&S Music",
  "Amount": "1000 Nicllet Mall",
  "Region": "Minneapolis",
  "State": "Minnesota",
  "Discount": 55403,
  "Phone": "(612) 304-6073",
  "Channel": "(612) 304-6074",
  "Sector": "http://www.noSectormusic.com"
}, {
  "ID": 4,
  "Product": "Tom's Club",
  "Amount": "999 Lake Drive",
  "Region": "Issaquah",
  "State": "Washington",
  "Discount": 98027,
  "Phone": "(800) 955-2292",
  "Channel": "(800) 955-2293",
  "Sector": "http://www.noSectortomsclub.com"
}, {
  "ID": 5,
  "Product": "E-Mart",
  "Amount": "3333 Beverly Rd",
  "Region": "Hoffman Estates",
  "State": "Illinois",
  "Discount": 60179,
  "Phone": "(847) 286-2500",
  "Channel": "(847) 286-2501",
  "Sector": "http://www.noSectoremart.com"
}, {
  "ID": 6,
  "Product": "Walters",
  "Amount": "200 Wilmot Rd",
  "Region": "Deerfield",
  "State": "Illinois",
  "Discount": 60015,
  "Phone": "(847) 940-2500",
  "Channel": "(847) 940-2501",
  "Sector": "http://www.noSectorwalters.com"
}, {
  "ID": 7,
  "Product": "StereoShack",
  "Amount": "400 Commerce S",
  "Region": "Fort Worth",
  "State": "Texas",
  "Discount": 76102,
  "Phone": "(817) 820-0741",
  "Channel": "(817) 820-0742",
  "Sector": "http://www.noSectorshack.com"
}, {
  "ID": 8,
  "Product": "Circuit Town",
  "Amount": "2200 Kensington Court",
  "Region": "Oak Brook",
  "State": "Illinois",
  "Discount": 60523,
  "Phone": "(800) 955-2929",
  "Channel": "(800) 955-9392",
  "Sector": "http://www.noSectorcircuittown.com"
}, {
  "ID": 9,
  "Product": "Premier Buy",
  "Amount": "7601 Penn Avenue South",
  "Region": "Richfield",
  "State": "Minnesota",
  "Discount": 55423,
  "Phone": "(612) 291-1000",
  "Channel": "(612) 291-2001",
  "Sector": "http://www.noSectorpremierbuy.com"
}, {
  "ID": 10,
  "Product": "ElectrixMax",
  "Amount": "263 Shuman Blvd",
  "Region": "Naperville",
  "State": "Illinois",
  "Discount": 60563,
  "Phone": "(630) 438-7800",
  "Channel": "(630) 438-7801",
  "Sector": "http://www.noSectorelectrixmax.com"
}, {
  "ID": 11,
  "Product": "Video Emporium",
  "Amount": "1201 Elm Street",
  "Region": "Dallas",
  "State": "Texas",
  "Discount": 75270,
  "Phone": "(214) 854-3000",
  "Channel": "(214) 854-3001",
  "Sector": "http://www.noSectorvideoemporium.com"
}, {
  "ID": 12,
  "Product": "Screen Shop",
  "Amount": "1000 Lowes Blvd",
  "Region": "Mooresville",
  "State": "North Carolina",
  "Discount": 28117,
  "Phone": "(800) 445-6937",
  "Channel": "(800) 445-6938",
  "Sector": "http://www.noSectorscreenshop.com"
}, {
  "ID": 9,
  "Product": "Premier Buy",
  "Amount": "7601 Penn Avenue South",
  "Region": "Richfield",
  "State": "Minnesota",
  "Discount": 55423,
  "Phone": "(612) 291-1000",
  "Channel": "(612) 291-2001",
  "Sector": "http://www.noSectorpremierbuy.com"
}, {
  "ID": 10,
  "Product": "ElectrixMax",
  "Amount": "263 Shuman Blvd",
  "Region": "Naperville",
  "State": "Illinois",
  "Discount": 60563,
  "Phone": "(630) 438-7800",
  "Channel": "(630) 438-7801",
  "Sector": "http://www.noSectorelectrixmax.com"
}, {
  "ID": 11,
  "Product": "Video Emporium",
  "Amount": "1201 Elm Street",
  "Region": "Dallas",
  "State": "Texas",
  "Discount": 75270,
  "Phone": "(214) 854-3000",
  "Channel": "(214) 854-3001",
  "Sector": "http://www.noSectorvideoemporium.com"
}, {
  "ID": 12,
  "Product": "Screen Shop",
  "Amount": "1000 Lowes Blvd",
  "Region": "Mooresville",
  "State": "North Carolina",
  "Discount": 28117,
  "Phone": "(800) 445-6937",
  "Channel": "(800) 445-6938",
  "Sector": "http://www.noSectorscreenshop.com"
}, {
  "ID": 9,
  "Product": "Premier Buy",
  "Amount": "7601 Penn Avenue South",
  "Region": "Richfield",
  "State": "Minnesota",
  "Discount": 55423,
  "Phone": "(612) 291-1000",
  "Channel": "(612) 291-2001",
  "Sector": "http://www.noSectorpremierbuy.com"
}, {
  "ID": 10,
  "Product": "ElectrixMax",
  "Amount": "263 Shuman Blvd",
  "Region": "Naperville",
  "State": "Illinois",
  "Discount": 60563,
  "Phone": "(630) 438-7800",
  "Channel": "(630) 438-7801",
  "Sector": "http://www.noSectorelectrixmax.com"
}, {
  "ID": 11,
  "Product": "Video Emporium",
  "Amount": "1201 Elm Street",
  "Region": "Dallas",
  "State": "Texas",
  "Discount": 75270,
  "Phone": "(214) 854-3000",
  "Channel": "(214) 854-3001",
  "Sector": "http://www.noSectorvideoemporium.com"
}, {
  "ID": 12,
  "Product": "Screen Shop",
  "Amount": "1000 Lowes Blvd",
  "Region": "Mooresville",
  "State": "North Carolina",
  "Discount": 28117,
  "Phone": "(800) 445-6937",
  "Channel": "(800) 445-6938",
  "Sector": "http://www.noSectorscreenshop.com"
}, {
  "ID": 9,
  "Product": "Premier Buy",
  "Amount": "7601 Penn Avenue South",
  "Region": "Richfield",
  "State": "Minnesota",
  "Discount": 55423,
  "Phone": "(612) 291-1000",
  "Channel": "(612) 291-2001",
  "Sector": "http://www.noSectorpremierbuy.com"
}, {
  "ID": 10,
  "Product": "ElectrixMax",
  "Amount": "263 Shuman Blvd",
  "Region": "Naperville",
  "State": "Illinois",
  "Discount": 60563,
  "Phone": "(630) 438-7800",
  "Channel": "(630) 438-7801",
  "Sector": "http://www.noSectorelectrixmax.com"
}, {
  "ID": 11,
  "Product": "Video Emporium",
  "Amount": "1201 Elm Street",
  "Region": "Dallas",
  "State": "Texas",
  "Discount": 75270,
  "Phone": "(214) 854-3000",
  "Channel": "(214) 854-3001",
  "Sector": "http://www.noSectorvideoemporium.com"
}, {
  "ID": 12,
  "Product": "Screen Shop",
  "Amount": "1000 Lowes Blvd",
  "Region": "Mooresville",
  "State": "North Carolina",
  "Discount": 28117,
  "Phone": "(800) 445-6937",
  "Channel": "(800) 445-6938",
  "Sector": "http://www.noSectorscreenshop.com"
}, {
  "ID": 9,
  "Product": "Premier Buy",
  "Amount": "7601 Penn Avenue South",
  "Region": "Richfield",
  "State": "Minnesota",
  "Discount": 55423,
  "Phone": "(612) 291-1000",
  "Channel": "(612) 291-2001",
  "Sector": "http://www.noSectorpremierbuy.com"
}, {
  "ID": 10,
  "Product": "ElectrixMax",
  "Amount": "263 Shuman Blvd",
  "Region": "Naperville",
  "State": "Illinois",
  "Discount": 60563,
  "Phone": "(630) 438-7800",
  "Channel": "(630) 438-7801",
  "Sector": "http://www.noSectorelectrixmax.com"
}, {
  "ID": 11,
  "Product": "Video Emporium",
  "Amount": "1201 Elm Street",
  "Region": "Dallas",
  "State": "Texas",
  "Discount": 75270,
  "Phone": "(214) 854-3000",
  "Channel": "(214) 854-3001",
  "Sector": "http://www.noSectorvideoemporium.com"
}, {
  "ID": 12,
  "Product": "Screen Shop",
  "Amount": "1000 Lowes Blvd",
  "Region": "Mooresville",
  "State": "North Carolina",
  "Discount": 28117,
  "Phone": "(800) 445-6937",
  "Channel": "(800) 445-6938",
  "Sector": "http://www.noSectorscreenshop.com"
}, {
  "ID": 9,
  "Product": "Premieقفغr Buy",
  "Amount": "7601 Penn Aveقnue South",
  "Region": "Richfield",
  "State": "Minnesota",
  "Discount": 55423,
  "Phone": "(612) 291-1000",
  "Channel": "(612) 291-2001",
  "Sector": "http://www.noSectorpremierbuy.com"
}, {
  "ID": 10,
  "Product": "ElectبrixMax",
  "Amount": "263 Shumaلابn Blvd",
  "Region": "Naperville",
  "State": "Illinois",
  "Discount": 60563,
  "Phone": "(630) 438-7800",
  "Channel": "(630) 438-7801",
  "Sector": "http://www.noSectorelectrixmax.com"
}, {
  "ID": 11,
  "Product": "Video Emporium",
  "Amount": "1201 Elm Street",
  "Region": "Dallas",
  "State": "Texas",
  "Discount": 75270,
  "Phone": "(214) 854-3000",
  "Channel": "(214) 854-3001",
  "Sector": "http://www.noSectorvideoemporium.com"
}, {
  "ID": 12,
  "Product": "Screen Shop",
  "Amount": "1000 Lowes Blvd",
  "Region": "Mooresville",
  "State": "North Carolina",
  "Discount": 28117,
  "Phone": "(800) 445-6937",
  "Channel": "(800) 445-6938",
  "Sector": "http://www.noSectorscreenshop.com"
}, {
  "ID": 9,
  "Product": "Premier Buy",
  "Amount": "7601 Penn Avenue South",
  "Region": "Richfield",
  "State": "Minnesota",
  "Discount": 55423,
  "Phone": "(612) 291-1000",
  "Channel": "(612) 291-2001",
  "Sector": "http://www.noSectorpremierbuy.com"
}, {
  "ID": 10,
  "Product": "ElectrixMax",
  "Amount": "263 Shuman Blvd",
  "Region": "Naperville",
  "State": "Illinois",
  "Discount": 60563,
  "Phone": "(630) 438-7800",
  "Channel": "(630) 438-7801",
  "Sector": "http://www.noSectorelectrixmax.com"
}, {
  "ID": 11,
  "Product": "Video Emporium",
  "Amount": "1201 Elm Street",
  "Region": "Dallas",
  "State": "Texas",
  "Discount": 75270,
  "Phone": "(214) 854-3000",
  "Channel": "(214) 854-3001",
  "Sector": "http://www.noSectorvideoemporium.com"
}, {
  "ID": 12,
  "Product": "Screen Shop",
  "Amount": "1000 Lowes Blvd",
  "Region": "Mooresville",
  "State": "North Carolina",
  "Discount": 28117,
  "Phone": "(800) 445-6937",
  "Channel": "(800) 445-6938",
  "Sector": "http://www.noSectorscreenshop.com"
}, {
  "ID": 9,
  "Product": "Premier Buy",
  "Amount": "7601 Penn Avenue South",
  "Region": "Richfield",
  "State": "Minnesota",
  "Discount": 55423,
  "Phone": "(612) 291-1000",
  "Channel": "(612) 291-2001",
  "Sector": "http://www.noSectorpremierbuy.com"
}, {
  "ID": 10,
  "Product": "ElectrفixMax",
  "Amount": "263 Shumaغn Blvd",
  "Region": "Naperville",
  "State": "Illinois",
  "Discount": 60563,
  "Phone": "(630) 438-7800",
  "Channel": "(630) 438-7801",
  "Sector": "http://www.noSectorelectrixmax.com"
}, {
  "ID": 11,
  "Product": "Video Emporium",
  "Amount": "1201 Elm Street",
  "Region": "Dallas",
  "State": "Texas",
  "Discount": 75270,
  "Phone": "(214) 854-3000",
  "Channel": "(214) 854-3001",
  "Sector": "http://www.noSectorvideoemporium.com"
}, {
  "ID": 12,
  "Product": "Screen۵ Shop",
  "Amount": "1000 Loweثقفs Blvd",
  "Region": "Mooresville",
  "State": "North Carolina",
  "Discount": 28117,
  "Phone": "(800) 445-6937",
  "Channel": "(800) 445-6938",
  "Sector": "http://www.noSectorscreenshop.com"
}, {
  "ID": 9,
  "Product": "Premier Buy",
  "Amount": "7601 Penذلn Avenue South",
  "Region": "Richfield",
  "State": "Minnesota",
  "Discount": 55423,
  "Phone": "(612) 291-1000",
  "Channel": "(612) 291-2001",
  "Sector": "http://www.noSectorpremierbuy.com"
}, {
  "ID": 10,
  "Product": "ElectrixMax",
  "Amount": "263 Shuman Blvd",
  "Region": "Naperville",
  "State": "Illinois",
  "Discount": 60563,
  "Phone": "(630) 438-7800",
  "Channel": "(630) 438-7801",
  "Sector": "http://www.noSectorelectrixmax.com"
}, {
  "ID": 11,
  "Product": "Video Emporium",
  "Amount": "1201 Elm Street",
  "Region": "Dallas",
  "State": "Texas",
  "Discount": 75270,
  "Phone": "(214) 854-3000",
  "Channel": "(214) 854-3001",
  "Sector": "http://www.noSectorvideoemporium.com"
}, {
  "ID": 12,
  "Product": "Screلen Shop",
  "Amount": "1000 Lowزرes Blvd",
  "Region": "Mooresville",
  "State": "North Carolina",
  "Discount": 28117,
  "Phone": "(800) 445-6937",
  "Channel": "(800) 445-6938",
  "Sector": "http://www.noSectorscreenshop.com"
}, {
  "ID": 9,
  "Product": "Premier Buy",
  "Amount": "7601 Penn Avenue South",
  "Region": "Richfield",
  "State": "Minnesota",
  "Discount": 55423,
  "Phone": "(612) 291-1000",
  "Channel": "(612) 291-2001",
  "Sector": "http://www.noSectorpremierbuy.com"
}, {
  "ID": 10,
  "Product": "ElectrلباixMax",
  "Amount": "263 Shumaبلاn Blvd",
  "Region": "Naperville",
  "State": "Illinois",
  "Discount": 60563,
  "Phone": "(630) 438-7800",
  "Channel": "(630) 438-7801",
  "Sector": "http://www.noSectorelectrixmax.com"
}, {
  "ID": 11,
  "Product": "Video Emporium",
  "Amount": "1201 Elm Street",
  "Region": "Dallas",
  "State": "Texas",
  "Discount": 75270,
  "Phone": "(214) 854-3000",
  "Channel": "(214) 854-3001",
  "Sector": "http://www.noSectorvideoemporium.com"
}, {
  "ID": 12,
  "Product": "Screen Shop",
  "Amount": "1000 Lowes Blvd",
  "Region": "Mooresville",
  "State": "North Carolina",
  "Discount": 28117,
  "Phone": "(800) 445-6937",
  "Channel": "(800) 445-6938",
  "Sector": "http://www.noSectorscreenshop.com"
}];

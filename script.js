console.log("connection is good working");
const countryobj={
    India:"india",
    USA:"united state of america",
    UK:"united kingdom"
}
console.log("looping object value....")
const countryobjvalues=Object.values(countryobj)
for(let i=0;i<countryobjvalues.length;i++){
    console.log(countryobjvalues[i])
}
console.log("looping object key...")
const countryobjkey=Object.keys(countryobj)
for(let i=0;i<=countryobjkey.length;i++){
    console.log(countryobjkey[i])
}
//foreach for object
countryobjkey.forEach((value)=>{
    console.log(`
    countryobjkey=${value}
    countryobjvalue=${countryobj[value]}
    
    `);
});
//forin for object
console.log(`for in best use for object`)
for(key in countryobj){
    console.log(`
    key=${key}
    valuse=${countryobj[key]}`)
}
//forof for object
console.log(`for of for object`)
 for(key of countryobjkey){
    console.log(`
    key=${key}
    value=${countryobj[key]}
    `)
 }

 //resume create json format
 const resume={
    "BIO-DETAILS": {
      "name": "Your first and last name",
      "email": "Your email address",
      "phone": "your phone number",
      "degree": "",
      "website": "Your website URL",
      "summary": "A one-sentence to one-paragraph overview text.",
      "location": {
        "address": "Your address ",
        "postalCode": "Your postal code",
        "city": "Your city",
        "countryCode": "Your country ",
        "region": "Your region "},
      "profiles": [
        {
          "destination": "your destination",
          "username": "Your username ",
          "url": "A URL to your user profile page"
        }
    ],
       "work": [
      {
        "company": "Your employer name",
        "position": "Your job title",
        "website": "The URL for the employer's website",
        "startDate": "Your start date, in YYYY-MM-DD format",
        "endDate": "Your end date, in YYY-MM-DD format (leave blank for a current position)",
        "summary": "A one-sentence to one-paragraph summary of this employer or position", }
        ],
    "education": [
      {
        "institution": "Your school name",
        "area": "Your area of study or degree earned",
        "studyType": "",
        "startDate": "Your start date, in YYYY-MM-DD format",
        "endDate": "Your completion date, in YYYY-MM-DD format",
        "gpa": "",
        "courses": "your course",
      }
    ],

    "awards": [
      {
        "title": "Your award title",
        "date": "Your date, in YYYY-MM-DD format you received the award",
        "awarder": "Your award given by",
        "summary": "A one-sentence to one-paragraph overview of this award"
      }
    ],
    "publications": [
      {
        "name": "Your publication title",
        "publisher": "Publisher name",
        "releaseDate": "Publication date, in YYYY-MM-DD format",
        "website": "The website URL for this publisher or book",
        "summary": "A one-sentence to one-paragraph overview of this publication"      
      }
    ],
    "skills":[
      {
        "name": "A category of job skills (e.g. 'Programming Languages')",
        "level": "",
        "keywords": [
          "Keywords under this category (e.g. 'Java', 'C++', etc)"
        ]
      }
    ],
    "languages": [
      {
        "language": "Language name",
        "fluency": "Your language fluency"
      }
    ],
    "interests": [
      {
        "name": "A category of interests (e.g. 'Sports')",
      }
    ],
}
 }
 console.log(resume);
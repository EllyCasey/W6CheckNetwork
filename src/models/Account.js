export class Account {
  constructor(data) {
    this.id = data.id
    this.bio = data.bio
    this.class = data.class
    this.coverImg = data.coverImg
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.email = data.email
    this.github = data.github
    this.graduated = data.graduated
    this.linkedIn = data.linkedin
    this.name = data.name
    this.picture = data.picture
    this.resume = data.resume

  }

}

const data = {
    "_id": "66edaaef49e06a469f59b9ef",
    "subs": [
        "auth0|66edaaee43e53f3fbcbf95f1"
    ],
    "email": "agentcoop@fbi.gov",
    "name": "Special Agent Cooper",
    "picture": "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnl5ZmczMXM4ZGhtN3hrcHQ1d3pwbW50dGN5anFneTQ0ZjA4Yjd5YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7PwOZJLNYUkU/200.webp",
    "bio": "I believe I was visited by a Giant last night.",
    "coverImg": "https://images.unsplash.com/photo-1586829135343-132950070391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    "github": "",
    "linkedin": "",
    "resume": "https://twinpeaks.fandom.com/wiki/Dale_Cooper",
    "class": "",
    "graduated": false,
    "createdAt": "2024-09-20T17:03:49.711Z",
    "updatedAt": "2024-09-23T13:43:15.365Z",
    "__v": 0,
    "id": "66edaaef49e06a469f59b9ef"
}
//user-manager 0.3.0
class User {
    notif(text){
        console.log("Notification: "+text);
    }



    constructor(uname, uage, ugender, ucontact, uskills){
        this.name = uname; 
        this.age = uage; 
        this.gender = ugender; 
        this.contact = ucontact; 
        this.skills = uskills;
        this.notif("New user created successfully...");
    }

    getUserInfo(param){
       switch(param){
            case "name":
                return "User: "+this.name;
            break;
            case "age":
                return "User: "+this.age;
            break;
            case "gender":
                return "User: "+this.gender;
            break;
            case "contact":
                return "User: "+this.contact;
            break;
            case "skills":
                return "User: "+this.skills;
            break;
            default:
                return "User: "+this.name+", is "+this.age+" years old, is a "+this.gender+", contact at "+this.contact+", is skilled "+this.skills+";";
                break;
       }
    }

    

    setName(nname){
        this.name = nname;
        this.notif("Username changed...");
    }
    setAge(nage){
        this.age = nage;
        this.notif("User' age changed...");
    }
    setGender(ngender){
        this.gender = ngender;
        this.notif("User's gender changed...");
    }
    setContact(ncontact){
        this.contact = ncontact;
        this.notif("User contact changed...");
    }
    setSkills(nskills){
        this.skills = nskills;
        this.notif("User skills changed...");
    }


    
}

function user(uname, uage, ugender, ucontact, uskills){
    return new User(uname, uage, ugender, ucontact, uskills);
};
module.exports = user;
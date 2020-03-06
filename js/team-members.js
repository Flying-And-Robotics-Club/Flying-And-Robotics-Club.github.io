var core = [], robocode = [], robotorque = [], robotronix = [], aerowing = [], digimedia = [], alumni = [], deleted = [];

function add (name, year, position, pno, email, linkedin, photo, sig) {
    var member = {
        name : name,
        year : year,
        position : position,
        pno : pno,
        email : email,
        linkedin : linkedin,
        photo : photo
    }
    switch (sig) {
        case 0 : core.push(member); break;
        case 1 : robocode.push(member); break;
        case 2 : robotorque.push(member); break;
        case 3 : robotronix.push(member); break;
        case 4 : aerowing.push(member); break;
        case 5 : digimedia.push(member); break;
        case 6 : alumni.push(member); break;
    }
}

function remove (name) {
    for (var i = 0; i < core.length; i++) if (core[i]["name"] === name) {
        deleted.push(core[i]);
        core.splice(i,1);
    }
    for (var i = 0; i < robocode.length; i++) if (robocode[i]["name"] === name) {
        deleted.push(robocode[i]);
        robocode.splice(i,1);
    }
    for (var i = 0; i < robotorque.length; i++) if (robotorque[i]["name"] === name) {
        deleted.push(robotorque[i]);
        robotorque.splice(i,1);
    }
    for (var i = 0; i < robotronix.length; i++) if (robotronix[i]["name"] === name) {
        deleted.push(robotronix[i]);
        robotronix.splice(i,1);
    }
    for (var i = 0; i < aerowing.length; i++) if (aerowing[i]["name"] === name) {
        deleted.push(aerowing[i]);
        aerowing.splice(i,1);
    }
    for (var i = 0; i < digimedia.length; i++) if (digimedia[i]["name"] === name) {
        deleted.push(digimedia[i]);
        digimedia.splice(i,1);
    }
}

function shift_to_alumni () {
    for (var i = 0; i < core.length; i++) {
        alumni.push(core[i]);
        core.splice(i,1);
    }
    for (var i = 1; i < robocode.length; i++) {
        alumni.push(robocode[i]);
        robocode.splice(i,1);
    }
    for (var i = 1; i < robotorque.length; i++) if (robotorque[i]["name"] === name) {
        alumni.push(robotorque[i]);
        robotorque.splice(i,1);
    }
    for (var i = 1; i < robotronix.length; i++) if (robotronix[i]["name"] === name) {
        alumni.push(robotronix[i]);
        robotronix.splice(i,1);
    }
    for (var i = 1; i < aerowing.length; i++) if (aerowing[i]["name"] === name) {
        alumni.push(aerowing[i]);
        aerowing.splice(i,1);
    }
    for (var i = 1; i < digimedia.length; i++) if (digimedia[i]["name"] === name) {
        alumni.push(digimedia[i]);
        digimedia.splice(i,1);
    }
}

function edit (n, name, year, position, pno, email, linkedin, photo) {
    for (var i = 0; i < core.length; i++) if (core[i]["name"] === n) {
        core[i]["name"] = name;
        core[i]["year"] = year;
        core[i]["position"] = position;
        core[i]["pno"] = pno;
        core[i]["email"] = email;
        core[i]["linkedin"] = linkedin;
        core[i]["photo"] = photo;
    }
    for (var i = 0; i < robocode.length; i++) if (robocode[i]["name"] === n) {
        core[i]["name"] = name;
        robocode[i]["year"] = year;
        robocode[i]["position"] = position;
        robocode[i]["pno"] = pno;
        robocode[i]["email"] = email;
        robocode[i]["linkedin"] = linkedin;
        robocode[i]["photo"] = photo;
    }
    for (var i = 0; i < robotorque.length; i++) if (robotorque[i]["name"] === n) {
        robotorque[i]["name"] = name;
        robotorque[i]["year"] = year;
        robotorque[i]["position"] = position;
        robotorque[i]["pno"] = pno;
        robotorque[i]["email"] = email;
        robotorque[i]["linkedin"] = linkedin;
        robotorque[i]["photo"] = photo;
    }
    for (var i = 0; i < robotronix.length; i++) if (robotronix[i]["name"] === n) {
        robotronix[i]["name"] = name;
        robotronix[i]["year"] = year;
        robotronix[i]["position"] = position;
        robotronix[i]["pno"] = pno;
        robotronix[i]["email"] = email;
        robotronix[i]["linkedin"] = linkedin;
        robotronix[i]["photo"] = photo;
    }
    for (var i = 0; i < aerowing.length; i++) if (aerowing[i]["name"] === n) {
        aerowing[i]["name"] = name;
        aerowing[i]["year"] = year;
        aerowing[i]["position"] = position;
        aerowing[i]["pno"] = pno;
        aerowing[i]["email"] = email;
        aerowing[i]["linkedin"] = linkedin;
        aerowing[i]["photo"] = photo;
    }
    for (var i = 0; i < digimedia.length; i++) if (digimedia[i]["name"] === n) {
        digimedia[i]["name"] = name;
        digimedia[i]["year"] = year;
        digimedia[i]["position"] = position;
        digimedia[i]["pno"] = pno;
        digimedia[i]["email"] = email;
        digimedia[i]["linkedin"] = linkedin;
        digimedia[i]["photo"] = photo;
    }
}
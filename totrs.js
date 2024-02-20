const start = document.getElementById("start");
const menu_lose = document.getElementById("menu_lose");
const menu_win = document.getElementById("menu_win");
const sword = document.getElementById("sword");
const heal = document.getElementById("heal");
const bow = document.getElementById("bow");
const ulti = document.getElementById("ulti");
let player_health = Number(100);
let enemy_health = Number(350);
let heal_count = Number(3);
let ulti_count = Number(0);
document.getElementById("player_health").innerText = player_health;
document.getElementById("enemy_health").innerText = enemy_health;
document.getElementById("heal_count").innerText = heal_count;
document.getElementById("ulti_count").innerText = ulti_count;
let enemy_turn = false;
let width = 88;
start.addEventListener("click", (e) => {
    document.getElementById("menu").style.display = "none";
})
menu_lose.addEventListener("click", (e) => {
    player_health = Number(100);
    enemy_health = Number(350);
    heal_count = Number(3);
    ulti_count = Number(0);
    document.getElementById("player_health").innerText = player_health;
    document.getElementById("enemy_health").innerText = enemy_health;
    document.getElementById("heal_count").innerText = heal_count;
    document.getElementById("ulti_count").innerText = ulti_count;
    document.getElementById("red_square_stat").innerText = " ";
    document.getElementById("enemy_stat").innerText = " ";
    document.getElementById("enemy_crit").innerText = " ";
    document.getElementById("enemy_dam").innerText = " ";
    document.getElementById("bleed").innerText = " ";
    document.getElementById("red_square").style.width = "200px";
    document.getElementById("red_square").style.height = "200px";
    document.getElementById("red_square").style.fontSize = "2rem";
    document.getElementById("heal").style.display = "block";
    document.getElementById("heal_num").style.display = "block";
    width = 88;
    document.getElementById("player_bar").style.width = width+"vw";
    heal_count = 3;
    document.getElementById("heal_count").innerText = heal_count;
    document.getElementById("lose").style.display = "none";
    document.getElementById("menu").style.display = "block";
})
menu_win.addEventListener("click", (e) => {
    player_health = Number(100);
    enemy_health = Number(350);
    heal_count = Number(3);
    ulti_count = Number(0);
    document.getElementById("player_health").innerText = player_health;
    document.getElementById("enemy_health").innerText = enemy_health;
    document.getElementById("heal_count").innerText = heal_count;
    document.getElementById("ulti_count").innerText = ulti_count;
    document.getElementById("red_square_stat").innerText = " ";
    document.getElementById("enemy_stat").innerText = " ";
    document.getElementById("enemy_crit").innerText = " ";
    document.getElementById("enemy_dam").innerText = " ";
    document.getElementById("bleed").innerText = " ";
    document.getElementById("enemy").style.width = "200px";
    document.getElementById("enemy").style.height = "200px";
    document.getElementById("enemy").style.fontSize = "2rem";
    document.getElementById("heal").style.display = "block";
    document.getElementById("heal_num").style.display = "block";
    width = 88;
    document.getElementById("player_bar").style.width = width+"vw";
    heal_count = 3;
    document.getElementById("heal_count").innerText = heal_count;
    document.getElementById("win").style.display = "none";
    document.getElementById("menu").style.display = "block";
})
sword.addEventListener("click", (e) => {
    document.getElementById("red_square_stat").innerText = " ";
    document.getElementById("enemy_crit").innerText = " ";
    document.getElementById("bleed").innerText = " ";
    let damage = Number(Math.random());
    let damage_num = 0;
    if(damage <= 0.4){
        damage_num = 18;
        let crit = Math.random();
        if(crit <= 0.3){
            damage_num = Math.ceil(damage_num * 1.5);
            document.getElementById("red_square_stat").innerText = "CRIT";
        }
        enemy_health -= damage_num;
        document.getElementById("enemy_health").innerText = enemy_health;
        document.getElementById("enemy_stat").innerText = "-"+damage_num;
        enemy_turn = true;
    }
    else if(damage > 0.4 && damage <= 0.75){
        damage_num = 19;
        let crit = Math.random();

        if(crit <= 0.3){
            damage_num = Math.ceil(damage_num * 1.5);
            document.getElementById("red_square_stat").innerText = "CRIT";
        }
        enemy_health -= damage_num;
        document.getElementById("enemy_health").innerText = enemy_health;
        document.getElementById("enemy_stat").innerText = "-"+damage_num;
        enemy_turn = true;
    }
    else{
        damage_num = 20;
        let crit = Math.random();
        if(crit <= 0.3){
            damage_num = Math.ceil(damage_num * 1.5);
            document.getElementById("red_square_stat").innerText = "CRIT";
        }
        enemy_health -= damage_num;
        document.getElementById("enemy_health").innerText = enemy_health;
        document.getElementById("enemy_stat").innerText = "-"+damage_num;
        enemy_turn = true;
    }
    let ulti_rndm = Number(Math.random());
    if(ulti_rndm <= 0.5){
        ulti_count += 6;
        document.getElementById("ulti_count").innerText = ulti_count;
    }
    else if(ulti_count> 0.5 && ulti_count <= 0.9){
        ulti_count += 7;
        document.getElementById("ulti_count").innerText = ulti_count;
    }
    else{
        ulti_count += 8;
        document.getElementById("ulti_count").innerText = ulti_count;
    }
    if(enemy_health > 0){
        let sword_bow = Number(Math.random());
    if(sword_bow <= 0.5){
        let enemy_dam_sword = Number(Math.random());
        let enemy_dam = 0;
        if(enemy_dam_sword <= 0.4){
            enemy_dam = 10;
            let crit = Math.random();
            if(crit <= 0.35){
                enemy_dam = Math.ceil(enemy_dam * 1.5);
                document.getElementById("enemy_crit").innerText = "CRIT ";
            }
            player_health -= enemy_dam;
            if(player_health <= 0){
                document.getElementById("red_square").style.width = "0px";
                document.getElementById("red_square").style.height = "0px";
                document.getElementById("red_square").style.fontSize = "0px";
                document.getElementsByTagName("body").display = "none";
                document.getElementById("lose").style.display = "block";
            }
            document.getElementById("player_health").innerText = player_health;
            document.getElementById("enemy_dam").innerText = " -"+enemy_dam;
            let bleed = 5;
            let bled = Math.random();
            if(bled <= 0.5){
                enemy_health -= bleed;
                document.getElementById("enemy_health").innerText = enemy_health;
                document.getElementById("bleed").innerText = " BLEED -"+bleed;
            }
            if(enemy_health <= 0){
                document.getElementById("enemy").style.width = "0px";
                document.getElementById("enemy").style.height = "0px";
                document.getElementById("enemy").style.fontSize = "0px";
                document.getElementById("win").style.display = "block";
            }
            enemy_turn = false;
        }
        else if(enemy_dam_sword > 0.4 && enemy_dam_sword <= 0.8 ){
            enemy_dam = 11;
            let crit = Math.random();
            if(crit <= 0.35){
                enemy_dam = Math.ceil(enemy_dam * 1.5);
                document.getElementById("enemy_crit").innerText = "CRIT ";
            }
            player_health -= enemy_dam;
            if(player_health <= 0){
                document.getElementById("red_square").style.width = "0px";
                document.getElementById("red_square").style.height = "0px";
                document.getElementById("red_square").style.fontSize = "0px";
                document.getElementsByTagName("body").display = "none";
                document.getElementById("lose").style.display = "block";
            }
            document.getElementById("player_health").innerText = player_health;
            document.getElementById("enemy_dam").innerText = " -"+enemy_dam;
            let bleed = 5;
            let bled = Math.random();
            if(bled <= 0.5){
                enemy_health -= bleed;
                document.getElementById("enemy_health").innerText = enemy_health;
                document.getElementById("bleed").innerText = " BLEED -"+bleed;
            }
            if(enemy_health <= 0){
                document.getElementById("enemy").style.width = "0px";
                document.getElementById("enemy").style.height = "0px";
                document.getElementById("enemy").style.fontSize = "0px";
                document.getElementById("win").style.display = "block";
            }
            enemy_turn = false;
        }
        else{
            enemy_dam = 12;
            let crit = Math.random();
            if(crit <= 0.35){
                enemy_dam = Math.ceil(enemy_dam * 1.5);
                document.getElementById("enemy_crit").innerText = "CRIT ";
            }
            player_health -= enemy_dam;
            if(player_health <= 0){
                document.getElementById("red_square").style.width = "0px";
                document.getElementById("red_square").style.height = "0px";
                document.getElementById("red_square").style.fontSize = "0px";
                document.getElementsByTagName("body").display = "none";
                document.getElementById("lose").style.display = "block";
            }
            document.getElementById("player_health").innerText = player_health;
            document.getElementById("enemy_dam").innerText = " -"+enemy_dam;
            let bleed = 5;
            let bled = Math.random();
            if(bled <= 0.5){
                enemy_health -= bleed;
                document.getElementById("enemy_health").innerText = enemy_health;
                document.getElementById("bleed").innerText = " BLEED -"+bleed;
            }
            if(enemy_health <= 0){
                document.getElementById("enemy").style.width = "0px";
                document.getElementById("enemy").style.height = "0px";
                document.getElementById("enemy").style.fontSize = "0px";
                document.getElementById("win").style.display = "block";
            }
            enemy_turn = false;
        }
    }
    else{
        let enemy_dam_bow = Number(Math.random())
        let enemy_dam = 0;
        if(enemy_dam_bow <= 0.4){
            enemy_dam = 12;
            let crit = Math.random();
            if(crit <= 0.35){
                enemy_dam = Math.ceil(enemy_dam * 1.5);
                document.getElementById("enemy_crit").innerText = "CRIT ";
            }
            player_health -= enemy_dam;
            if(player_health <= 0){
                document.getElementById("red_square").style.width = "0px";
                document.getElementById("red_square").style.height = "0px";
                document.getElementById("red_square").style.fontSize = "0px";
                document.getElementsByTagName("body").display = "none";
                document.getElementById("lose").style.display = "block";
            }
            document.getElementById("player_health").innerText = player_health;
            document.getElementById("enemy_dam").innerText = " -"+enemy_dam;
            let bleed = 5;
            let bled = Math.random();
            if(bled <= 0.5){
                enemy_health -= bleed;
                document.getElementById("enemy_health").innerText = enemy_health;
                document.getElementById("bleed").innerText = " BLEED -"+bleed;
            }
            if(enemy_health <= 0){
                document.getElementById("enemy").style.width = "0px";
                document.getElementById("enemy").style.height = "0px";
                document.getElementById("enemy").style.fontSize = "0px";
                document.getElementById("win").style.display = "block";
            }
            enemy_turn = false;
        }
        else if(enemy_dam_bow > 0.4 && enemy_dam_bow <= 0.8 ){
            enemy_dam = 13;
            let crit = Math.random();
            if(crit <= 0.35){
                enemy_dam = Math.ceil(enemy_dam * 1.5);
                document.getElementById("enemy_crit").innerText = "CRIT ";
            }
            player_health -= enemy_dam;
            if(player_health <= 0){
                document.getElementById("red_square").style.width = "0px";
                document.getElementById("red_square").style.height = "0px";
                document.getElementById("red_square").style.fontSize = "0px";
                document.getElementsByTagName("body").display = "none";
                document.getElementById("lose").style.display = "block";
            }
            document.getElementById("player_health").innerText = player_health;
            document.getElementById("enemy_dam").innerText = " -"+enemy_dam;
            let bleed = 5;
            let bled = Math.random();
            if(bled <= 0.5){
                enemy_health -= bleed;
                document.getElementById("enemy_health").innerText = enemy_health;
                document.getElementById("bleed").innerText = " BLEED -"+bleed;
            }
            if(enemy_health <= 0){
                document.getElementById("enemy").style.width = "0px";
                document.getElementById("enemy").style.height = "0px";
                document.getElementById("enemy").style.fontSize = "0px";
                document.getElementById("win").style.display = "block";
            }
            enemy_turn = false;
        }
        else{
            enemy_dam = 14;
            let crit = Math.random();
            if(crit <= 0.35){
                enemy_dam = Math.ceil(enemy_dam * 1.5);
                document.getElementById("enemy_crit").innerText = "CRIT ";
            }
            player_health -= enemy_dam;
            if(player_health <= 0){
                document.getElementById("red_square").style.width = "0px";
                document.getElementById("red_square").style.height = "0px";
                document.getElementById("red_square").style.fontSize = "0px";
                document.getElementsByTagName("body").display = "none";
                document.getElementById("lose").style.display = "block";
            }
            document.getElementById("player_health").innerText = player_health;
            document.getElementById("enemy_dam").innerText = " -"+enemy_dam;
            let bleed = 5;
            let bled = Math.random();
            if(bled <= 0.5){
                enemy_health -= bleed;
                document.getElementById("enemy_health").innerText = enemy_health;
                document.getElementById("bleed").innerText = " BLEED -"+bleed;
            }
            if(enemy_health <= 0){
                document.getElementById("enemy").style.width = "0px";
                document.getElementById("enemy").style.height = "0px";
                document.getElementById("enemy").style.fontSize = "0px";
                document.getElementById("win").style.display = "block";
            }
            enemy_turn = false;
        }
    }
    }
    else{
        document.getElementById("enemy").style.width = "0px";
        document.getElementById("enemy").style.height = "0px";
        document.getElementById("enemy").style.fontSize = "0px";
        document.getElementById("win").style.display = "block";
    }
})
heal.addEventListener("click", (e) => {
    document.getElementById("red_square_stat").innerText = " ";
    document.getElementById("enemy_stat").innerText = " ";
    document.getElementById("enemy_crit").innerText = " ";
    document.getElementById("enemy_dam").innerText = " ";
    document.getElementById("bleed").innerText = " ";
    if(player_health <= 58){
        if(heal_count > 0){
            let heal_much = Number(Math.random())
        let heal_num = Number(0);
        if(heal_much <= 0.4){
            heal_num = 40;
            player_health += heal_num;
            document.getElementById("player_health").innerText = player_health;
            enemy_turn = true;
        }
        else if(heal_much > 0.4 && heal_num <= 0.8){
            heal_num = 41;
            player_health += heal_num;
            document.getElementById("player_health").innerText = player_health;
            enemy_turn = true;
        }
        else{
            heal_num = 42;
            player_health += heal_num;
            document.getElementById("player_health").innerText = player_health;
            enemy_turn = true;
        }
        let ulti_rndm = Number(Math.random())
        if(ulti_rndm <= 0.5){
            ulti_count += 6;
            document.getElementById("ulti_count").innerText = ulti_count;
        }
        else if(ulti_count> 0.5 && ulti_count <= 0.9){
            ulti_count += 7;
            document.getElementById("ulti_count").innerText = ulti_count;
        }
        else{
            ulti_count += 8;
            document.getElementById("ulti_count").innerText = ulti_count;
        }
        let sword_bow = Number(Math.random());
        if(sword_bow <= 0.5){
            let enemy_dam_sword = Number(Math.random())
            let enemy_dam = Number(0);
            if(enemy_dam_sword <= 0.4){
                enemy_dam = 10;
                let crit = Math.random();
            if(crit <= 0.35){
                enemy_dam = Math.ceil(enemy_dam * 1.5);
                document.getElementById("enemy_crit").innerText = "CRIT ";
            }
                player_health -= enemy_dam;
                if(player_health <= 0){
                    document.getElementById("red_square").style.width = "0px";
                    document.getElementById("red_square").style.height = "0px";
                    document.getElementById("red_square").style.fontSize = "0px";
                    document.getElementById("lose").style.display = "block";
                }
                document.getElementById("player_health").innerText = player_health;
                document.getElementById("enemy_dam").innerText = " +"+(heal_num - enemy_dam);
                enemy_turn = false;
            }
            else if(enemy_dam_sword > 0.4 && enemy_dam_sword <= 0.8 ){
                enemy_dam = 11;
                let crit = Math.random();
            if(crit <= 0.35){
                enemy_dam = Math.ceil(enemy_dam * 1.5);
                document.getElementById("enemy_crit").innerText = "CRIT ";
            }
                player_health -= enemy_dam;
                if(player_health <= 0){
                    document.getElementById("red_square").style.width = "0px";
                    document.getElementById("red_square").style.height = "0px";
                    document.getElementById("red_square").style.fontSize = "0px";
                    document.getElementById("lose").style.display = "block";
                }
                document.getElementById("player_health").innerText = player_health;
                document.getElementById("enemy_dam").innerText = " +"+(heal_num - enemy_dam);
                enemy_turn = false;
            }
            else{
                enemy_dam = 12;
                let crit = Math.random();
            if(crit <= 0.35){
                enemy_dam = Math.ceil(enemy_dam * 1.5);
                document.getElementById("enemy_crit").innerText = "CRIT ";
            }
                player_health -= enemy_dam;
                if(player_health <= 0){
                    document.getElementById("red_square").style.width = "0px";
                    document.getElementById("red_square").style.height = "0px";
                    document.getElementById("red_square").style.fontSize = "0px";
                    document.getElementById("lose").style.display = "block";
                }
                document.getElementById("player_health").innerText = player_health;
                document.getElementById("enemy_dam").innerText = " +"+(heal_num - enemy_dam);
                enemy_turn = false;
            }
        }
        else{
            let enemy_dam_bow = Number(Math.random())
            let enemy_dam = 0;
            if(enemy_dam_bow <= 0.4){
                enemy_dam = 12;
                player_health -= enemy_dam;
                if(player_health <= 0){
                    document.getElementById("red_square").style.width = "0px";
                    document.getElementById("red_square").style.height = "0px";
                    document.getElementById("red_square").style.fontSize = "0px";
                    document.getElementById("lose").style.display = "block";
                }
                document.getElementById("player_health").innerText = player_health;
                document.getElementById("enemy_dam").innerText = " +"+(heal_num - enemy_dam);
                enemy_turn = false;
            }
            else if(enemy_dam_bow > 0.4 && enemy_dam_bow <= 0.8 ){
                enemy_dam = 13;
                let crit = Math.random();
            if(crit <= 0.35){
                enemy_dam = Math.ceil(enemy_dam * 1.5);
                document.getElementById("enemy_crit").innerText = "CRIT ";
            }
                player_health -= enemy_dam;
                if(player_health <= 0){
                    document.getElementById("red_square").style.width = "0px";
                    document.getElementById("red_square").style.height = "0px";
                    document.getElementById("red_square").style.fontSize = "0px";
                    document.getElementById("lose").style.display = "block";
                }
                document.getElementById("player_health").innerText = player_health;
                document.getElementById("enemy_dam").innerText = " +"+(heal_num - enemy_dam);
                enemy_turn = false;
            }
            else{
                enemy_dam = 14;
                let crit = Math.random();
            if(crit <= 0.35){
                enemy_dam = Math.ceil(enemy_dam * 1.5);
                document.getElementById("enemy_crit").innerText = "CRIT ";
            }
                player_health -= enemy_dam;
                if(player_health <= 0){
                    document.getElementById("red_square").style.width = "0px";
                    document.getElementById("red_square").style.height = "0px";
                    document.getElementById("red_square").style.fontSize = "0px";
                    document.getElementById("lose").style.display = "block";
                }
                document.getElementById("player_health").innerText = player_health;
                document.getElementById("enemy_dam").innerText = " +"+(heal_num - enemy_dam);
                enemy_turn = false;
            }
        }
        }
        else{
            document.getElementById("heal").style.display = "none";
            document.getElementById("heal_num").style.display = "none";
            width -= 20;
            document.getElementById("player_bar").style.width = width+"vw";
        }
        heal_count--;
        document.getElementById("heal_count").innerText = heal_count;
        if(heal_count == 0){
            document.getElementById("heal").style.display = "none";
            document.getElementById("heal_num").style.display = "none";
            width -= 20;
            document.getElementById("player_bar").style.width = width+"vw";
        }
    }
})
bow.addEventListener("click", (e) => {
    document.getElementById("red_square_stat").innerText = " ";
    document.getElementById("enemy_crit").innerText = " ";
    document.getElementById("bleed").innerText = " ";
    let damage = Number(Math.random());
    let damage_num = 0;
    if(damage <= 0.4){
        damage_num = 20;
        let crit = Math.random();
        if(crit <= 0.15){
            damage_num = Math.ceil(damage_num * 1.5);
            document.getElementById("red_square_stat").innerText = "CRIT";
        }
        enemy_health -= damage_num;
        document.getElementById("enemy_health").innerText = enemy_health;
        document.getElementById("enemy_stat").innerText = "-"+damage_num;
        enemy_turn = true;
    }
    else if(damage > 0.4 && damage <= 0.75){
        damage_num = 21;
        let crit = Math.random();
        if(crit <= 0.15){
            damage_num = Math.ceil(damage_num * 1.5);
            document.getElementById("red_square_stat").innerText = "CRIT";
        }
        enemy_health -= damage_num;
        document.getElementById("enemy_health").innerText = enemy_health;
        document.getElementById("enemy_stat").innerText = "-"+damage_num;
        enemy_turn = true;
    }
    else{
        damage_num = 22;
        let crit = Math.random();
        if(crit <= 0.15){
            damage_num = Math.ceil(damage_num * 1.5);
            document.getElementById("red_square_stat").innerText = "CRIT";
        }
        enemy_health -= damage_num;
        document.getElementById("enemy_health").innerText = enemy_health;
        document.getElementById("enemy_stat").innerText = "-"+damage_num;
        enemy_turn = true;
    }
    let ulti_rndm = Number(Math.random())
    if(ulti_rndm <= 0.5){
        ulti_count += 6;
        document.getElementById("ulti_count").innerText = ulti_count;
    }
    else if(ulti_count> 0.5 && ulti_count <= 0.9){
        ulti_count += 7;
        document.getElementById("ulti_count").innerText = ulti_count;
    }
    else{
        ulti_count += 8;
        document.getElementById("ulti_count").innerText = ulti_count;
    }
    if(enemy_health > 0){
        let sword_bow = Number(Math.random());
    if(sword_bow <= 0.5){
        let enemy_dam_sword = Number(Math.random())
        let enemy_dam = 0;
        if(enemy_dam_sword <= 0.4){
            enemy_dam = 10;
            let crit = Math.random();
            if(crit <= 0.35){
                enemy_dam = Math.ceil(enemy_dam * 1.5);
                document.getElementById("enemy_crit").innerText = "CRIT ";
            }
            player_health -= enemy_dam;
            if(player_health <= 0){
                document.getElementById("red_square").style.width = "0px";
                document.getElementById("red_square").style.height = "0px";
                document.getElementById("red_square").style.fontSize = "0px";
                document.getElementById("lose").style.display = "block";
            }
            document.getElementById("player_health").innerText = player_health;
            document.getElementById("enemy_dam").innerText = " -"+enemy_dam;
            enemy_turn = false;
        }
        else if(enemy_dam_sword > 0.4 && enemy_dam_sword <= 0.8 ){
            enemy_dam = 11;
            let crit = Math.random();
            if(crit <= 0.35){
                enemy_dam = Math.ceil(enemy_dam * 1.5);
                document.getElementById("enemy_crit").innerText = "CRIT ";
            }
            player_health -= enemy_dam;
            if(player_health <= 0){
                document.getElementById("red_square").style.width = "0px";
                document.getElementById("red_square").style.height = "0px";
                document.getElementById("red_square").style.fontSize = "0px";
                document.getElementById("lose").style.display = "block";
            }
            document.getElementById("player_health").innerText = player_health;
            document.getElementById("enemy_dam").innerText = " -"+enemy_dam;
            enemy_turn = false;
        }
        else{
            enemy_dam = 12;
            let crit = Math.random();
            if(crit <= 0.35){
                enemy_dam = Math.ceil(enemy_dam * 1.5);
                document.getElementById("enemy_crit").innerText = "CRIT ";
            }
            player_health -= enemy_dam;
            if(player_health <= 0){
                document.getElementById("red_square").style.width = "0px";
                document.getElementById("red_square").style.height = "0px";
                document.getElementById("red_square").style.fontSize = "0px";
                document.getElementById("lose").style.display = "block";
            }
            document.getElementById("player_health").innerText = player_health;
            document.getElementById("enemy_dam").innerText = " -"+enemy_dam;
            enemy_turn = false;
        }
    }
    else{
        let enemy_dam_bow = Number(Math.random())
        let enemy_dam = 0;
        if(enemy_dam_bow <= 0.4){
            enemy_dam = 12;
            let crit = Math.random();
            if(crit <= 0.35){
                enemy_dam = Math.ceil(enemy_dam * 1.5);
                document.getElementById("enemy_crit").innerText = "CRIT ";
            }
            player_health -= enemy_dam;
            if(player_health <= 0){
                document.getElementById("red_square").style.width = "0px";
                document.getElementById("red_square").style.height = "0px";
                document.getElementById("red_square").style.fontSize = "0px";
            }
            document.getElementById("player_health").innerText = player_health;
            document.getElementById("enemy_dam").innerText = " -"+enemy_dam;
            enemy_turn = false;
        }
        else if(enemy_dam_bow > 0.4 && enemy_dam_bow <= 0.8 ){
            enemy_dam = 13;
            let crit = Math.random();
            if(crit <= 0.35){
                enemy_dam = Math.ceil(enemy_dam * 1.5);
                document.getElementById("enemy_crit").innerText = "CRIT ";
            }
            player_health -= enemy_dam;
            if(player_health <= 0){
                document.getElementById("red_square").style.width = "0px";
                document.getElementById("red_square").style.height = "0px";
                document.getElementById("red_square").style.fontSize = "0px";
            }
            document.getElementById("player_health").innerText = player_health;
            document.getElementById("enemy_dam").innerText = " -"+enemy_dam;
            enemy_turn = false;
        }
        else{
            enemy_dam = 14;
            let crit = Math.random();
            if(crit <= 0.35){
                enemy_dam = Math.ceil(enemy_dam * 1.5);
                document.getElementById("enemy_crit").innerText = "CRIT ";
            }
            player_health -= enemy_dam;
            if(player_health <= 0){
                document.getElementById("red_square").style.width = "0px";
                document.getElementById("red_square").style.height = "0px";
                document.getElementById("red_square").style.fontSize = "0px";
            }
            document.getElementById("player_health").innerText = player_health;
            document.getElementById("enemy_dam").innerText = " -"+enemy_dam;
            enemy_turn = false;
        }
    }
    }
    else{
        document.getElementById("enemy").style.width = "0px";
        document.getElementById("enemy").style.height = "0px";
        document.getElementById("enemy").style.fontSize = "0px";
        document.getElementById("win").style.display = "block";
    }
    if(player_health <= 0){
        document.getElementById("red_square").style.width = "0px";
        document.getElementById("red_square").style.height = "0px";
        document.getElementById("red_square").style.fontSize = "0px";
        document.getElementById("lose").style.display = "block";
    }
})
ulti.addEventListener("click", (e) => {
    document.getElementById("red_square_stat").innerText = " ";
    document.getElementById("enemy_stat").innerText = " ";
    document.getElementById("enemy_crit").innerText = " ";
    document.getElementById("enemy_dam").innerText = " ";
    document.getElementById("bleed").innerText = " ";
    if(ulti_count >= 100){
        ulti_count -= 100;
        let damage_num = 50;
        enemy_health -= damage_num;
        document.getElementById("enemy_stat").innerText = " STUN + -"+damage_num;
        document.getElementById("enemy_health").innerText = enemy_health;
        document.getElementById("ulti_count").innerText = ulti_count;
    }
    if(enemy_health <= 0){
        document.getElementById("enemy").style.width = "0px";
        document.getElementById("enemy").style.height = "0px";
        document.getElementById("enemy").style.fontSize = "0px";
        document.getElementById("win").style.display = "block";
    }
})

<template>
  <div class="home">
    <div id="wrapper">

        <!-- Header -->
          <header id="header">
            <h1>Fire Emblem Average Calculator</h1>
          </header>

        <!-- Main -->
          <div id="main">

            <!-- Content -->
              <section id="content" class="main">
                <!-- <span class="image main"><img src="images/pic04.jpg" alt="" /></span> -->
                <p>Base Stats</p>
                <p>Level: <input type="text" v-model="baseLevel"> Promoted? <select v-model="promoted">
                  <option value="false">false</option>
                  <option value= "true">true</option>
                </select></p>
                <div class="row gtr-uniform">
                  <div class="col-6 col-12-xsmall">
                    HP: <input type="text" v-model="baseHP">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Strength: <input type="text" v-model="baseStrength">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Magic: <input type="text" v-model="baseMagic">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Skill: <input type="text" v-model="baseSkill">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Speed: <input type="text" v-model="baseSpeed">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Luck: <input type="text" v-model="baseLuck">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Defense: <input type="text" v-model="baseDefense">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Resistance: <input type="text" v-model="baseResistance">
                  </div>
                </div>
                <p>Growth Rates</p>
                <div class="row gtr-uniform">
                  <div class="col-6 col-12-xsmall">
                    HP: <input type="text" v-model="growthHP">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Strength: <input type="text" v-model="growthStrength">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Magic: <input type="text" v-model="growthMagic">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Skill: <input type="text" v-model="growthSkill">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Speed: <input type="text" v-model="growthSpeed">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Luck: <input type="text" v-model="growthLuck">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Defense: <input type="text" v-model="growthDefense">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Resistance: <input type="text" v-model="growthResistance">
                  </div>
                </div>
                <p>Promotion Gains</p>
                <div class="row gtr-uniform">
                  <div class="col-6 col-12-xsmall">
                    HP: <input type="text" v-model="promoHP">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Strength: <input type="text" v-model="promoStrength">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Magic: <input type="text" v-model="promoMagic">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Skill: <input type="text" v-model="promoSkill">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Speed: <input type="text" v-model="promoSpeed">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Luck: <input type="text" v-model="promoLuck">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Defense: <input type="text" v-model="promoDefense">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Resistance: <input type="text" v-model="promoResistance">
                  </div>
                </div>
                <p>Base Class Caps</p>
                <div class="row gtr-uniform">
                  <div class="col-6 col-12-xsmall">
                    HP: <input type="text" v-model="baseCapHP">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Strength: <input type="text" v-model="baseCapStrength">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Magic: <input type="text" v-model="baseCapMagic">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Skill: <input type="text" v-model="baseCapSkill">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Speed: <input type="text" v-model="baseCapSpeed">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Luck: <input type="text" v-model="baseCapLuck">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Defense: <input type="text" v-model="baseCapDefense">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Resistance: <input type="text" v-model="baseCapResistance">
                  </div>
                </div>
                <p>Promoted Class Caps</p>
                <div class="row gtr-uniform">
                  <div class="col-6 col-12-xsmall">
                    HP: <input type="text" v-model="promoCapHP">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Strength: <input type="text" v-model="promoCapStrength">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Magic: <input type="text" v-model="promoCapMagic">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Skill: <input type="text" v-model="promoCapSkill">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Speed: <input type="text" v-model="promoCapSpeed">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Luck: <input type="text" v-model="promoCapLuck">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Defense: <input type="text" v-model="promoCapDefense">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Resistance: <input type="text" v-model="promoCapResistance">
                  </div>
                </div>
                <button v-on:click="calculateStats()">Calculate Stats</button>
                <br>
                <table>
                  <tbody v-for="stats in calculatedStats">
                    <tr>
                      <td>{{stats.level}}</td>
                      <td>{{stats.hp}}</td>
                      <td>{{stats.strength}}</td>
                      <td>{{stats.magic}}</td>
                      <td>{{stats.skill}}</td>
                      <td>{{stats.speed}}</td>
                      <td>{{stats.luck}}</td>
                      <td>{{stats.defense}}</td>
                      <td>{{stats.resistance}}</td>
                    </tr>
                  </tbody>
                </table>
                <ul class="actions">
                  <li><a href="/developer" class="button">Return to Developer Page</a></li>
                </ul>
              </section>
          </div>

        <!-- Footer -->
          <footer id="footer">
            <section>
              <h2>Useful Links</h2>
              <ul class="icons">
                <li><a href="https://github.com/Alice-S-Wong" class="icon brands fa-github alt"><span class="label">GitHub</span></a></li>
                <li><a href="https://www.linkedin.com/in/alice-s-wong/" class="icon brands fa-linkedin alt"><span class="label">Linkedin</span></a></li>
              </ul>
            </section>
            <p class="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
          </footer>

      </div>
  </div>
</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {
      promoted: "false",
      baseLevel: 1,
      baseHP: 19,
      baseStrength: 5,
      baseMagic: 1,
      baseSkill: 6,
      baseSpeed: 7,
      baseLuck: 6,
      baseDefense: 5,
      baseResistance: 0,
      growthHP: 75,
      growthStrength: 50,
      growthMagic: 20,
      growthSkill: 50,
      growthSpeed: 55,
      growthLuck: 35,
      growthDefense: 40,
      growthResistance: 40,
      promoHP: 4,
      promoStrength: 3,
      promoMagic: 2,
      promoSkill: 2,
      promoSpeed: 2,
      promoLuck: 0,
      promoDefense: 3,
      promoResistance: 2,
      baseCapHP: 40,
      baseCapStrength: 20,
      baseCapMagic: 20,
      baseCapSkill: 20,
      baseCapSpeed: 20,
      baseCapLuck: 40,
      baseCapDefense: 20,
      baseCapResistance: 20,
      promoCapHP: 60,
      promoCapStrength: 26,
      promoCapMagic: 20,
      promoCapSkill: 27,
      promoCapSpeed: 28,
      promoCapLuck: 40,
      promoCapDefense: 24,
      promoCapResistance: 22,
      calculatedStats: [
        {
          level: "Level",
          hp: "HP", 
          strength: "Strength", 
          magic: "Magic",
          skill: "Skill",
          speed: "Speed",
          luck: "Luck",
          defense: "Defense",
          resistance: "Resistance"
        }
      ],
      statsHash: {}
    };
  },
  created: function() {},
  methods: {
    randomNumber: function() {
      return Math.floor((Math.random() * 100));
    },
    calculateStats: function() {
      this.calculatedStats = [
        {
          level: "Level",
          hp: "HP", 
          strength: "Strength", 
          magic: "Magic",
          skill: "Skill",
          speed: "Speed",
          luck: "Luck",
          defense: "Defense",
          resistance: "Resistance"
        }
      ];
      if (this.promoted === "false") {
        var level = parseInt(this.baseLevel);
        var loopBaseLevel = level;
        var i;
        var currentHP = parseInt(this.baseHP);
        var currentStrength = parseInt(this.baseStrength);
        var currentMagic = parseInt(this.baseMagic);
        var currentSkill = parseInt(this.baseSkill);
        var currentSpeed = parseInt(this.baseSpeed);
        var currentLuck = parseInt(this.baseLuck);
        var currentDefense = parseInt(this.baseDefense);
        var currentResistance = parseInt(this.baseResistance);
        var carryoverHP = 0;
        var carryoverStrength = 0;
        var carryoverMagic = 0;
        var carryoverSkill = 0;
        var carryoverSpeed = 0;
        var carryoverLuck = 0;
        var carryoverDefense = 0;
        var carryoverResistance = 0;
        this.statsHash.level = level;
        this.statsHash.hp = currentHP;
        this.statsHash.strength = currentStrength;
        this.statsHash.magic = currentMagic;
        this.statsHash.skill = currentSkill;
        this.statsHash.speed = currentSpeed;
        this.statsHash.luck = currentLuck;
        this.statsHash.defense = currentDefense;
        this.statsHash.resistance = currentResistance;
        this.calculatedStats.push(this.statsHash);
        this.statsHash = {};
        for (i = 0; i < (20 - loopBaseLevel); i++) {
          level++;
          if (currentHP < this.baseCapHP) {
            if (parseInt(this.growthHP) > 100) {
              carryoverHP = parseInt(this.growthHP);
              while (carryoverHP > 100) {
                carryoverHP -= 100;
                currentHP++;
              }
              if (carryoverHP > this.randomNumber()) {
                currentHP++;
              }
            } else {
              if (parseInt(this.growthHP) > this.randomNumber()) {
                currentHP++;
              }
            }
          } else {
            currentHP = parseInt(this.baseCapHP);
          }
          if (currentStrength < this.baseCapStrength) {
            if (parseInt(this.growthStrength) > 100) {
              carryoverStrength = parseInt(this.growthStrength);
              while (carryoverStrength > 100) {
                carryoverStrength -= 100;
                currentStrength++;
              }
              if (carryoverStrength > this.randomNumber()) {
                currentStrength++;
              }
            } else {
              if (parseInt(this.growthStrength) > this.randomNumber()) {
                currentStrength++;
              }
            }
          } else {
            currentStrength = parseInt(this.baseCapStrength);
          }
          if (currentMagic < this.baseCapMagic) {
            if (parseInt(this.growthMagic) > 100) {
              carryoverMagic = parseInt(this.growthMagic);
              while (carryoverMagic > 100) {
                carryoverMagic -= 100;
                currentMagic++;
              }
              if (carryoverMagic > this.randomNumber()) {
                currentMagic++;
              }
            } else {
              if (parseInt(this.growthMagic) > this.randomNumber()) {
                currentMagic++;
              }
            }
          } else {
            currentMagic = parseInt(this.baseCapMagic);
          }
          if (currentSkill < this.baseCapSkill) {
            if (parseInt(this.growthSkill) > 100) {
              carryoverSkill = parseInt(this.growthSkill);
              while (carryoverSkill > 100) {
                carryoverSkill -= 100;
                currentSkill++;
              }
              if (carryoverSkill > this.randomNumber()) {
                currentSkill++;
              }
            } else {
              if (parseInt(this.growthSkill) > this.randomNumber()) {
                currentSkill++;
              }
            }
          } else {
            currentSkill = parseInt(this.baseCapSkill);
          }
          if (currentSpeed < this.baseCapSpeed) {
            if (parseInt(this.growthSpeed) > 100) {
              carryoverSpeed = parseInt(this.growthSpeed);
              while (carryoverSpeed > 100) {
                carryoverSpeed -= 100;
                currentSpeed++;
              }
              if (carryoverSpeed > this.randomNumber()) {
                currentSpeed++;
              }
            } else {
              if (parseInt(this.growthSpeed) > this.randomNumber()) {
                currentSpeed++;
              }
            }
          } else {
            currentSpeed = parseInt(this.baseCapSpeed);
          }
          if (currentLuck < this.baseCapLuck) {
            if (parseInt(this.growthLuck) > 100) {
              carryoverLuck = parseInt(this.growthLuck);
              while (carryoverLuck > 100) {
                carryoverLuck -= 100;
                currentLuck++;
              }
              if (carryoverLuck > this.randomNumber()) {
                currentLuck++;
              }
            } else {
              if (parseInt(this.growthLuck) > this.randomNumber()) {
                currentLuck++;
              }
            }
          } else {
            currentLuck = parseInt(this.baseCapLuck);
          }
          if (currentDefense < this.baseCapDefense) {
            if (parseInt(this.growthDefense) > 100) {
              carryoverDefense = parseInt(this.growthDefense);
              while (carryoverDefense > 100) {
                carryoverDefense -= 100;
                currentDefense++;
              }
              if (carryoverDefense > this.randomNumber()) {
                currentDefense++;
              }
            } else {
              if (parseInt(this.growthDefense) > this.randomNumber()) {
                currentDefense++;
              }
            }
          } else {
            currentDefense = parseInt(this.baseCapDefense);
          }
          if (currentResistance < this.baseCapResistance) {
            if (parseInt(this.growthResistance) > 100) {
              carryoverResistance = parseInt(this.growthResistance);
              while (carryoverResistance > 100) {
                carryoverResistance -= 100;
                currentResistance++;
              }
              if (carryoverResistance > this.randomNumber()) {
                currentResistance++;
              }
            } else {
              if (parseInt(this.growthResistance) > this.randomNumber()) {
                currentResistance++;
              }
            }
          } else {
            currentResistance = parseInt(this.baseCapResistance);
          }
          this.statsHash.level = level;
          this.statsHash.hp = currentHP;
          this.statsHash.strength = currentStrength;
          this.statsHash.magic = currentMagic;
          this.statsHash.skill = currentSkill;
          this.statsHash.speed = currentSpeed;
          this.statsHash.luck = currentLuck;
          this.statsHash.defense = currentDefense;
          this.statsHash.resistance = currentResistance;
          this.calculatedStats.push(this.statsHash);
          this.statsHash = {};
        }
        this.statsHash = {
          level: "Level",
          hp: "HP", 
          strength: "Strength", 
          magic: "Magic",
          skill: "Skill",
          speed: "Speed",
          luck: "Luck",
          defense: "Defense",
          resistance: "Resistance"
        };
        this.calculatedStats.push(this.statsHash);
        this.statsHash = {};
        level = 1;
        currentHP += parseInt(this.promoHP);
        currentStrength += parseInt(this.promoStrength);
        currentMagic += parseInt(this.promoMagic);
        currentSkill += parseInt(this.promoSkill);
        currentSpeed += parseInt(this.promoSpeed);
        currentLuck += parseInt(this.promoLuck);
        currentDefense += parseInt(this.promoDefense);
        currentResistance += parseInt(this.promoResistance);
        this.statsHash.level = level;
        this.statsHash.hp = currentHP;
        this.statsHash.strength = currentStrength;
        this.statsHash.magic = currentMagic;
        this.statsHash.skill = currentSkill;
        this.statsHash.speed = currentSpeed;
        this.statsHash.luck = currentLuck;
        this.statsHash.defense = currentDefense;
        this.statsHash.resistance = currentResistance;
        this.calculatedStats.push(this.statsHash);
        this.statsHash = {};
        for (i = 0; i < 19; i++) {
          level++;
          if (currentHP < this.promoCapHP) {
            if (parseInt(this.growthHP) > 100) {
              carryoverHP = parseInt(this.growthHP);
              while (carryoverHP > 100) {
                carryoverHP -= 100;
                currentHP++;
              }
              if (carryoverHP > this.randomNumber()) {
                currentHP++;
              }
            } else {
              if (parseInt(this.growthHP) > this.randomNumber()) {
                currentHP++;
              }
            }
          } else {
            currentHP = parseInt(this.promoCapHP);
          }
          if (currentStrength < this.promoCapStrength) {
            if (parseInt(this.growthStrength) > 100) {
              carryoverStrength = parseInt(this.growthStrength);
              while (carryoverStrength > 100) {
                carryoverStrength -= 100;
                currentStrength++;
              }
              if (carryoverStrength > this.randomNumber()) {
                currentStrength++;
              }
            } else {
              if (parseInt(this.growthStrength) > this.randomNumber()) {
                currentStrength++;
              }
            }
          } else {
            currentStrength = parseInt(this.promoCapStrength);
          }
          if (currentMagic < this.promoCapMagic) {
            if (parseInt(this.growthMagic) > 100) {
              carryoverMagic = parseInt(this.growthMagic);
              while (carryoverMagic > 100) {
                carryoverMagic -= 100;
                currentMagic++;
              }
              if (carryoverMagic > this.randomNumber()) {
                currentMagic++;
              }
            } else {
              if (parseInt(this.growthMagic) > this.randomNumber()) {
                currentMagic++;
              }
            }
          } else {
            currentMagic = parseInt(this.promoCapMagic);
          }
          if (currentSkill < this.promoCapSkill) {
            if (parseInt(this.growthSkill) > 100) {
              carryoverSkill = parseInt(this.growthSkill);
              while (carryoverSkill > 100) {
                carryoverSkill -= 100;
                currentSkill++;
              }
              if (carryoverSkill > this.randomNumber()) {
                currentSkill++;
              }
            } else {
              if (parseInt(this.growthSkill) > this.randomNumber()) {
                currentSkill++;
              }
            }
          } else {
            currentSkill = parseInt(this.promoCapSkill);
          }
          if (currentSpeed < this.promoCapSpeed) {
            if (parseInt(this.growthSpeed) > 100) {
              carryoverSpeed = parseInt(this.growthSpeed);
              while (carryoverSpeed > 100) {
                carryoverSpeed -= 100;
                currentSpeed++;
              }
              if (carryoverSpeed > this.randomNumber()) {
                currentSpeed++;
              }
            } else {
              if (parseInt(this.growthSpeed) > this.randomNumber()) {
                currentSpeed++;
              }
            }
          } else {
            currentSpeed = parseInt(this.promoCapSpeed);
          }
          if (currentLuck < this.promoCapLuck) {
            if (parseInt(this.growthLuck) > 100) {
              carryoverLuck = parseInt(this.growthLuck);
              while (carryoverLuck > 100) {
                carryoverLuck -= 100;
                currentLuck++;
              }
              if (carryoverLuck > this.randomNumber()) {
                currentLuck++;
              }
            } else {
              if (parseInt(this.growthLuck) > this.randomNumber()) {
                currentLuck++;
              }
            }
          } else {
            currentLuck = parseInt(this.promoCapLuck);
          }
          if (currentDefense < this.promoCapDefense) {
            if (parseInt(this.growthDefense) > 100) {
              carryoverDefense = parseInt(this.growthDefense);
              while (carryoverDefense > 100) {
                carryoverDefense -= 100;
                currentDefense++;
              }
              if (carryoverDefense > this.randomNumber()) {
                currentDefense++;
              }
            } else {
              if (parseInt(this.growthDefense) > this.randomNumber()) {
                currentDefense++;
              }
            }
          } else {
            currentDefense = parseInt(this.promoCapDefense);
          }
          if (currentResistance < this.promoCapResistance) {
            if (parseInt(this.growthResistance) > 100) {
              carryoverResistance = parseInt(this.growthResistance);
              while (carryoverResistance > 100) {
                carryoverResistance -= 100;
                currentResistance++;
              }
              if (carryoverResistance > this.randomNumber()) {
                currentResistance++;
              }
            } else {
              if (parseInt(this.growthResistance) > this.randomNumber()) {
                currentResistance++;
              }
            }
          } else {
            currentResistance = parseInt(this.promoCapResistance);
          }
          this.statsHash.level = level;
          this.statsHash.hp = currentHP;
          this.statsHash.strength = currentStrength;
          this.statsHash.magic = currentMagic;
          this.statsHash.skill = currentSkill;
          this.statsHash.speed = currentSpeed;
          this.statsHash.luck = currentLuck;
          this.statsHash.defense = currentDefense;
          this.statsHash.resistance = currentResistance;
          this.calculatedStats.push(this.statsHash);
          this.statsHash = {};
        }
      }
      if (this.promoted === "true") {
        this.calculatedStats.push(this.statsHash);
        this.statsHash = {};
        var promotedLevel = parseInt(this.baseLevel);
        var promotedBaseLevel = promotedLevel;
        var promotedI;
        var promotedCurrentHP = parseInt(this.baseHP);
        var promotedCurrentStrength = parseInt(this.baseStrength);
        var promotedCurrentMagic = parseInt(this.baseMagic);
        var promotedCurrentSkill = parseInt(this.baseSkill);
        var promotedCurrentSpeed = parseInt(this.baseSpeed);
        var promotedCurrentLuck = parseInt(this.baseLuck);
        var promotedCurrentDefense = parseInt(this.baseDefense);
        var promotedCurrentResistance = parseInt(this.baseResistance);
        var promotedCarryoverHP = 0;
        var promotedCarryoverStrength = 0;
        var promotedCarryoverMagic = 0;
        var promotedCarryoverSkill = 0;
        var promotedCarryoverSpeed = 0;
        var promotedCarryoverLuck = 0;
        var promotedCarryoverDefense = 0;
        var promotedCarryoverResistance = 0;
        this.statsHash.level = promotedLevel;
        this.statsHash.hp = promotedCurrentHP;
        this.statsHash.strength = promotedCurrentStrength;
        this.statsHash.magic = promotedCurrentMagic;
        this.statsHash.skill = promotedCurrentSkill;
        this.statsHash.speed = promotedCurrentSpeed;
        this.statsHash.luck = promotedCurrentLuck;
        this.statsHash.defense = promotedCurrentDefense;
        this.statsHash.resistance = promotedCurrentResistance;
        this.calculatedStats.push(this.statsHash);
        this.statsHash = {};
        for (i = 0; i < (20 - promotedBaseLevel); i++) {
          if (promotedCurrentHP < this.promoCapHP) {
            if (parseInt(this.growthHP) > 100) {
              promotedCarryoverHP = parseInt(this.growthHP);
              while (promotedCarryoverHP > 100) {
                promotedCarryoverHP -= 100;
                promotedCurrentHP++;
              }
              if (promotedCarryoverHP > this.randomNumber()) {
                promotedCurrentHP++;
              }
            } else {
              if (parseInt(this.growthHP) > this.randomNumber()) {
                promotedCurrentHP++;
              }
            }
          } else {
            promotedCurrentHP = parseInt(this.promoCapHP);
          }
          if (promotedCurrentStrength < this.promoCapStrength) {
            if (parseInt(this.growthStrength) > 100) {
              promotedCarryoverStrength = parseInt(this.growthStrength);
              while (promotedCarryoverStrength > 100) {
                promotedCarryoverStrength -= 100;
                promotedCurrentStrength++;
              }
              if (promotedCarryoverStrength > this.randomNumber()) {
                promotedCurrentStrength++;
              }
            } else {
              if (parseInt(this.growthStrength) > this.randomNumber()) {
                promotedCurrentStrength++;
              }
            }
          } else {
            promotedCurrentStrength = parseInt(this.promoCapStrength);
          }
          if (promotedCurrentMagic < this.promoCapMagic) {
            if (parseInt(this.growthMagic) > 100) {
              promotedCarryoverMagic = parseInt(this.growthMagic);
              while (promotedCarryoverMagic > 100) {
                promotedCarryoverMagic -= 100;
                promotedCurrentMagic++;
              }
              if (promotedCarryoverMagic > this.randomNumber()) {
                promotedCurrentMagic++;
              }
            } else {
              if (parseInt(this.growthMagic) > this.randomNumber()) {
                promotedCurrentMagic++;
              }
            }
          } else {
            promotedCurrentMagic = parseInt(this.promoCapMagic);
          }
          if (promotedCurrentSkill < this.promoCapSkill) {
            if (parseInt(this.growthSkill) > 100) {
              promotedCarryoverSkill = parseInt(this.growthSkill);
              while (promotedCarryoverSkill > 100) {
                promotedCarryoverSkill -= 100;
                promotedCurrentSkill++;
              }
              if (promotedCarryoverSkill > this.randomNumber()) {
                promotedCurrentSkill++;
              }
            } else {
              if (parseInt(this.growthSkill) > this.randomNumber()) {
                promotedCurrentSkill++;
              }
            }
          } else {
            promotedCurrentSkill = parseInt(this.promoCapSkill);
          }
          if (promotedCurrentSpeed < this.promoCapSpeed) {
            if (parseInt(this.growthSpeed) > 100) {
              promotedCarryoverSpeed = parseInt(this.growthSpeed);
              while (promotedCarryoverSpeed > 100) {
                promotedCarryoverSpeed -= 100;
                promotedCurrentSpeed++;
              }
              if (promotedCarryoverSpeed > this.randomNumber()) {
                promotedCurrentSpeed++;
              }
            } else {
              if (parseInt(this.growthSpeed) > this.randomNumber()) {
                promotedCurrentSpeed++;
              }
            }
          } else {
            promotedCurrentSpeed = parseInt(this.promoCapSpeed);
          }
          if (promotedCurrentLuck < this.promoCapLuck) {
            if (parseInt(this.growthLuck) > 100) {
              promotedCarryoverLuck = parseInt(this.growthLuck);
              while (promotedCarryoverLuck > 100) {
                promotedCarryoverLuck -= 100;
                promotedCurrentLuck++;
              }
              if (promotedCarryoverLuck > this.randomNumber()) {
                promotedCurrentLuck++;
              }
            } else {
              if (parseInt(this.growthLuck) > this.randomNumber()) {
                promotedCurrentLuck++;
              }
            }
          } else {
            promotedCurrentLuck = parseInt(this.promoCapLuck);
          }
          if (promotedCurrentDefense < this.promoCapDefense) {
            if (parseInt(this.growthDefense) > 100) {
              promotedCarryoverDefense = parseInt(this.growthDefense);
              while (promotedCarryoverDefense > 100) {
                promotedCarryoverDefense -= 100;
                promotedCurrentDefense++;
              }
              if (promotedCarryoverDefense > this.randomNumber()) {
                promotedCurrentDefense++;
              }
            } else {
              if (parseInt(this.growthDefense) > this.randomNumber()) {
                promotedCurrentDefense++;
              }
            }
          } else {
            promotedCurrentDefense = parseInt(this.promoCapDefense);
          }
          if (promotedCurrentResistance < this.promoCapResistance) {
            if (parseInt(this.growthResistance) > 100) {
              promotedCarryoverResistance = parseInt(this.growthResistance);
              while (promotedCarryoverResistance > 100) {
                promotedCarryoverResistance -= 100;
                promotedCurrentResistance++;
              }
              if (promotedCarryoverResistance > this.randomNumber()) {
                promotedCurrentResistance++;
              }
            } else {
              if (parseInt(this.growthResistance) > this.randomNumber()) {
                promotedCurrentResistance++;
              }
            }
          } else {
            promotedCurrentResistance = parseInt(this.promoCapResistance);
          }
          this.statsHash.level = promotedLevel;
          this.statsHash.hp = promotedCurrentHP;
          this.statsHash.strength = promotedCurrentStrength;
          this.statsHash.magic = promotedCurrentMagic;
          this.statsHash.skill = promotedCurrentSkill;
          this.statsHash.speed = promotedCurrentSpeed;
          this.statsHash.luck = promotedCurrentLuck;
          this.statsHash.defense = promotedCurrentDefense;
          this.statsHash.resistance = promotedCurrentResistance;
          this.calculatedStats.push(this.statsHash);
          this.statsHash = {};
        }
      }
    }
  }
};
</script>
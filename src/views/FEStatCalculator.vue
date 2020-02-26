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
        this.statsHash.level = level;
        this.statsHash.hp = currentHP.toFixed(2);
        this.statsHash.strength = currentStrength.toFixed(2);
        this.statsHash.magic = currentMagic.toFixed(2);
        this.statsHash.skill = currentSkill.toFixed(2);
        this.statsHash.speed = currentSpeed.toFixed(2);
        this.statsHash.luck = currentLuck.toFixed(2);
        this.statsHash.defense = currentDefense.toFixed(2);
        this.statsHash.resistance = currentResistance.toFixed(2);
        this.calculatedStats.push(this.statsHash);
        this.statsHash = {};
        var trueHP = parseInt(this.growthHP) / 100;
        var trueStrength = parseInt(this.growthStrength) / 100;
        var trueMagic = parseInt(this.growthMagic) / 100;
        var trueSkill = parseInt(this.growthSkill) / 100;
        var trueSpeed = parseInt(this.growthSpeed) / 100;
        var trueLuck = parseInt(this.growthLuck) / 100;
        var trueDefense = parseInt(this.growthDefense) / 100;
        var trueResistance = parseInt(this.growthResistance) / 100;
        for (i = 0; i < (20 - loopBaseLevel); i++) {
          level++;
          if (currentHP < this.baseCapHP) {
            currentHP += trueHP;
          } else {
            currentHP = parseInt(this.baseCapHP);
          }
          if (currentStrength < this.baseCapStrength) {
            currentStrength += trueStrength;
          } else {
            currentStrength = parseInt(this.baseCapStrength);
          }
          if (currentMagic < this.baseCapMagic) {
            currentMagic += trueMagic;
          } else {
            currentMagic = parseInt(this.baseCapMagic);
          }
          if (currentSkill < this.baseCapSkill) {
            currentSkill += trueSkill;
          } else {
            currentSkill = parseInt(this.baseCapSkill);
          }
          if (currentSpeed < this.baseCapSpeed) {
            currentSpeed += trueSpeed;
          } else {
            currentSpeed = parseInt(this.baseCapSpeed);
          }
          if (currentLuck < this.baseCapLuck) {
            currentLuck += trueLuck;
          } else {
            currentLuck = parseInt(this.baseCapLuck);
          }
          if (currentDefense < this.baseCapDefense) {
            currentDefense += trueDefense;
          } else {
            currentDefense = parseInt(this.baseCapDefense);
          }
          if (currentResistance < this.baseCapResistance) {
            currentResistance += trueResistance;
          } else {
            currentResistance = parseInt(this.baseCapResistance);
          }
          this.statsHash.level = level;
          this.statsHash.hp = currentHP.toFixed(2);
          this.statsHash.strength = currentStrength.toFixed(2);
          this.statsHash.magic = currentMagic.toFixed(2);
          this.statsHash.skill = currentSkill.toFixed(2);
          this.statsHash.speed = currentSpeed.toFixed(2);
          this.statsHash.luck = currentLuck.toFixed(2);
          this.statsHash.defense = currentDefense.toFixed(2);
          this.statsHash.resistance = currentResistance.toFixed(2);
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
        this.statsHash.hp = currentHP.toFixed(2);
        this.statsHash.strength = currentStrength.toFixed(2);
        this.statsHash.magic = currentMagic.toFixed(2);
        this.statsHash.skill = currentSkill.toFixed(2);
        this.statsHash.speed = currentSpeed.toFixed(2);
        this.statsHash.luck = currentLuck.toFixed(2);
        this.statsHash.defense = currentDefense.toFixed(2);
        this.statsHash.resistance = currentResistance.toFixed(2);
        this.calculatedStats.push(this.statsHash);
        this.statsHash = {};
        for (i = 0; i < 19; i++) {
          level++;
          if (currentHP < this.promoCapHP) {
            currentHP += trueHP;
          } else {
            currentHP = parseInt(this.promoCapHP);
          }
          if (currentStrength < this.promoCapStrength) {
            currentStrength += trueStrength;
          } else {
            currentStrength = parseInt(this.promoCapStrength);
          }
          if (currentMagic < this.promoCapMagic) {
            currentMagic += trueMagic;
          } else {
            currentMagic = parseInt(this.promoCapMagic);
          }
          if (currentSkill < this.promoCapSkill) {
            currentSkill += trueSkill;
          } else {
            currentSkill = parseInt(this.promoCapSkill);
          }
          if (currentSpeed < this.promoCapSpeed) {
            currentSpeed += trueSpeed;
          } else {
            currentSpeed = parseInt(this.promoCapSpeed);
          }
          if (currentLuck < this.promoCapLuck) {
            currentLuck += trueLuck;
          } else {
            currentLuck = parseInt(this.promoCapLuck);
          }
          if (currentDefense < this.promoCapDefense) {
            currentDefense += trueDefense;
          } else {
            currentDefense = parseInt(this.promoCapDefense);
          }
          if (currentResistance < this.promoCapResistance) {
            currentResistance += trueResistance;
          } else {
            currentResistance = parseInt(this.promoCapResistance);
          }
          this.statsHash.level = level;
          this.statsHash.hp = currentHP.toFixed(2);
          this.statsHash.strength = currentStrength.toFixed(2);
          this.statsHash.magic = currentMagic.toFixed(2);
          this.statsHash.skill = currentSkill.toFixed(2);
          this.statsHash.speed = currentSpeed.toFixed(2);
          this.statsHash.luck = currentLuck.toFixed(2);
          this.statsHash.defense = currentDefense.toFixed(2);
          this.statsHash.resistance = currentResistance.toFixed(2);
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
        this.statsHash.level = promotedLevel;
        this.statsHash.hp = promotedCurrentHP.toFixed(2);
        this.statsHash.strength = promotedCurrentStrength.toFixed(2);
        this.statsHash.magic = promotedCurrentMagic.toFixed(2);
        this.statsHash.skill = promotedCurrentSkill.toFixed(2);
        this.statsHash.speed = promotedCurrentSpeed.toFixed(2);
        this.statsHash.luck = promotedCurrentLuck.toFixed(2);
        this.statsHash.defense = promotedCurrentDefense.toFixed(2);
        this.statsHash.resistance = promotedCurrentResistance.toFixed(2);
        this.calculatedStats.push(this.statsHash);
        this.statsHash = {};
        var promotedTrueHP = parseInt(this.growthHP) / 100;
        var promotedTrueStrength = parseInt(this.growthStrength) / 100;
        var promotedTrueMagic = parseInt(this.growthMagic) / 100;
        var promotedTrueSkill = parseInt(this.growthSkill) / 100;
        var promotedTrueSpeed = parseInt(this.growthSpeed) / 100;
        var promotedTrueLuck = parseInt(this.growthLuck) / 100;
        var promotedTrueDefense = parseInt(this.growthDefense) / 100;
        var promotedTrueResistance = parseInt(this.growthResistance) / 100;
        for (i = 0; i < (20 - promotedBaseLevel); i++) {
          promotedLevel++;
          if (promotedCurrentHP < this.promoCapHP) {
            promotedCurrentHP += promotedTrueHP;
          } else {
            promotedCurrentHP = parseInt(this.promoCapHP);
          }
          if (promotedCurrentStrength < this.promoCapStrength) {
            promotedCurrentStrength += promotedTrueStrength;
          } else {
            promotedCurrentStrength = parseInt(this.promoCapStrength);
          }
          if (promotedCurrentMagic < this.promoCapMagic) {
            promotedCurrentMagic += promotedTrueMagic;
          } else {
            promotedCurrentMagic = parseInt(this.promoCapMagic);
          }
          if (promotedCurrentSkill < this.promoCapSkill) {
            promotedCurrentSkill += promotedTrueSkill;
          } else {
            promotedCurrentSkill = parseInt(this.promoCapSkill);
          }
          if (promotedCurrentSpeed < this.promoCapSpeed) {
            promotedCurrentSpeed += promotedTrueSpeed;
          } else {
            promotedCurrentSpeed = parseInt(this.promoCapSpeed);
          }
          if (promotedCurrentLuck < this.promoCapLuck) {
            promotedCurrentLuck += promotedTrueLuck;
          } else {
            promotedCurrentLuck = parseInt(this.promoCapLuck);
          }
          if (promotedCurrentDefense < this.promoCapDefense) {
            promotedCurrentDefense += promotedTrueDefense;
          } else {
            promotedCurrentDefense = parseInt(this.promoCapDefense);
          }
          if (promotedCurrentResistance < this.promoCapResistance) {
            promotedCurrentResistance += promotedTrueResistance;
          } else {
            promotedCurrentResistance = parseInt(this.promoCapResistance);
          }
          this.statsHash.level = promotedLevel;
          this.statsHash.hp = promotedCurrentHP.toFixed(2);
          this.statsHash.strength = promotedCurrentStrength.toFixed(2);
          this.statsHash.magic = promotedCurrentMagic.toFixed(2);
          this.statsHash.skill = promotedCurrentSkill.toFixed(2);
          this.statsHash.speed = promotedCurrentSpeed.toFixed(2);
          this.statsHash.luck = promotedCurrentLuck.toFixed(2);
          this.statsHash.defense = promotedCurrentDefense.toFixed(2);
          this.statsHash.resistance = promotedCurrentResistance.toFixed(2);
          this.calculatedStats.push(this.statsHash);
          this.statsHash = {};
        }
      }
    }
  }
};
</script>
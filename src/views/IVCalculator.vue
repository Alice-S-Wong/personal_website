<template>
  <div class="home">
    <div id="wrapper">

        <!-- Header -->
          <header id="header">
            <h1>Pokemon IV Calculator</h1>
          </header>

        <!-- Main -->
          <div id="main">

            <!-- Content -->
              <section id="content" class="main">
                <!-- <span class="image main"><img src="images/pic04.jpg" alt="" /></span> -->
                <p>Current Stats</p>
                <p>Level: <input type="text" v-model="level"> Nature: <select v-model="nature">
                  <option value="hardy">hardy</option>
                  <option value="lonely">lonely</option>
                  <option value="brave">brave</option>
                  <option value="adamant">adamant</option>
                  <option value="naughty">naughty</option>
                  <option value="bold">bold</option>
                  <option value="docile">docile</option>
                  <option value="relaxed">relaxed</option>
                  <option value="impish">impish</option>
                  <option value="lax">lax</option>
                  <option value="timid">timid</option>
                  <option value="hasty">hasty</option>
                  <option value="serious">serious</option>
                  <option value="jolly">jolly</option>
                  <option value="naive">naive</option>
                  <option value="modest">modest</option>
                  <option value="mild">mild</option>
                  <option value="quiet">quiet</option>
                  <option value="bashful">bashful</option>
                  <option value="rash">rash</option>
                  <option value="calm">calm</option>
                  <option value="gentle">gentle</option>
                  <option value="sassy">sassy</option>
                  <option value="careful">careful</option>
                  <option value="quirky">quirky</option>
                </select></p>
                <div class="row gtr-uniform">
                  <div class="col-6 col-12-xsmall">
                    HP: <input type="text" v-model="hp">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Attack: <input type="text" v-model="attack">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Defense: <input type="text" v-model="defense">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Special Attack: <input type="text" v-model="specialAttack">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Special Defense: <input type="text" v-model="specialDefense">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Speed: <input type="text" v-model="speed">
                  </div>
                </div>
                <p>Species Base Stats</p>
                <div class="row gtr-uniform">
                  <div class="col-6 col-12-xsmall">
                    HP: <input type="text" v-model="baseHP">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Attack: <input type="text" v-model="baseAttack">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Defense: <input type="text" v-model="baseDefense">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Special Attack: <input type="text" v-model="baseSpecialAttack">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Special Defense: <input type="text" v-model="baseSpecialDefense">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Speed: <input type="text" v-model="baseSpeed">
                  </div>
                </div>
                <p>Effort Values (EVs)</p>
                <div class="row gtr-uniform">
                  <div class="col-6 col-12-xsmall">
                    HP: <input type="text" v-model="evHP">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Attack: <input type="text" v-model="evAttack">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Defense: <input type="text" v-model="evDefense">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Special Attack: <input type="text" v-model="evSpecialAttack">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Special Defense: <input type="text" v-model="evSpecialDefense">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Speed: <input type="text" v-model="evSpeed">
                  </div>
                </div>
                <p>Individual Values (IVs)</p>
                <div class="row gtr-uniform">
                  <div class="col-6 col-12-xsmall">
                    HP: <input type="text" v-model="ivHP">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Attack: <input type="text" v-model="ivAttack">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Defense: <input type="text" v-model="ivDefense">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Special Attack: <input type="text" v-model="ivSpecialAttack">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Special Defense: <input type="text" v-model="ivSpecialDefense">
                  </div>
                  <div class="col-6 col-12-xsmall">
                    Speed: <input type="text" v-model="ivSpeed">
                  </div>
                </div>
                <p><button v-on:click="calculateIVs()">Calculate IVs</button></p>
                <p>Calculated Individual Values (IVs)</p>
                <p>HP: {{ivArrayHP}}</p>
                <p>Attack: {{ivArrayAttack}}</p>
                <p>Defense: {{ivArrayDefense}}</p>
                <p>Special Attack: {{ivArraySpecialAttack}}</p>
                <p>Special Defense: {{ivArraySpecialDefense}}</p>
                <p>Speed: {{ivArraySpeed}}</p>
                <p>Calculated Stats</p>
                <p>Level: <input type="text" v-model="calculatedLevel"></p>
                <p><button v-on:click="calculateStats()">Calculate Stats</button></p>
                <p>HP: {{calculatedHP}}</p>
                <p>Attack: {{calculatedAttack}}</p>
                <p>Defense: {{calculatedDefense}}</p>
                <p>Special Attack: {{calculatedSpecialAttack}}</p>
                <p>Special Defense: {{calculatedSpecialDefense}}</p>
                <p>Speed: {{calculatedSpeed}}</p>
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
      level: 1,
      nature: "",
      hp: 0,
      attack: 0,
      defense: 0,
      specialAttack: 0,
      specialDefense: 0,
      speed: 0,
      baseHP: 0,
      baseAttack: 0,
      baseDefense: 0,
      baseSpecialAttack: 0,
      baseSpecialDefense: 0,
      baseSpeed: 0,
      evHP: 0,
      evAttack: 0,
      evDefense: 0,
      evSpecialAttack: 0,
      evSpecialDefense: 0,
      evSpeed: 0,
      ivHP: 31,
      ivAttack: 31,
      ivDefense: 31,
      ivSpecialAttack: 31,
      ivSpecialDefense: 31,
      ivSpeed: 31,
      calculatedLevel: 100,
      calculatedHP: 0,
      calculatedAttack: 0,
      calculatedDefense: 0,
      calculatedSpecialAttack: 0,
      calculatedSpecialDefense: 0,
      calculatedSpeed: 0,
      attackModifier: 1,
      defenseModifier: 1,
      specialAttackModifier: 1,
      specialDefenseModifier: 1,
      speedModifier: 1,
      ivArrayHP: [],
      ivArrayAttack: [],
      ivArrayDefense: [],
      ivArraySpecialAttack: [],
      ivArraySpecialDefense: [],
      ivArraySpeed: [],
    };
  },
  created: function() {},
  methods: {
    natureModifier: function() {
      this.attackModifier = 1;
      this.defenseModifier = 1;
      this.specialAttackModifier = 1;
      this.specialDefenseModifier = 1;
      this.speedModifier = 1;
      if (this.nature === "lonely") {
        this.attackModifier = 1.1;
        this.defenseModifier = 0.9;
      } else if (this.nature === "brave") {
        this.attackModifier = 1.1;
        this.speedModifier = 0.9;
      } else if (this.nature === "adamant") {
        this.attackModifier = 1.1;
        this.specialAttackModifier = 0.9;
      } else if (this.nature === "naughty") {
        this.attackModifier = 1.1;
        this.specialDefenseModifier = 0.9;
      } else if (this.nature === "bold") {
        this.defenseModifier = 1.1;
        this.attackModifier = 0.9;
      } else if (this.nature === "relaxed") {
        this.defenseModifier = 1.1;
        this.speedModifier = 0.9;
      } else if (this.nature === "impish") {
        this.defenseModifier = 1.1;
        this.specialAttackModifier = 0.9;
      } else if (this.nature === "lax") {
        this.defenseModifier = 1.1;
        this.specialDefenseModifier = 0.9;
      } else if (this.nature === "timid") {
        this.speedModifier = 1.1;
        this.attackModifier = 0.9;
      } else if (this.nature === "hasty") {
        this.speedModifier = 1.1;
        this.defenseModifier = 0.9;
      } else if (this.nature === "jolly") {
        this.speedModifier = 1.1;
        this.specialAttackModifier = 0.9;
      } else if (this.nature === "naive") {
        this.speedModifier = 1.1;
        this.specialDefenseModifier = 0.9;
      } else if (this.nature === "modest") {
        this.specialAttackModifier = 1.1;
        this.attackModifier = 0.9;
      } else if (this.nature === "mild") {
        this.specialAttackModifier = 1.1;
        this.defenseModifier = 0.9;
      } else if (this.nature === "quiet") {
        this.specialAttackModifier = 1.1;
        this.speedModifier = 0.9;
      } else if (this.nature === "rash") {
        this.specialAttackModifier = 1.1;
        this.specialDefenseModifier = 0.9;
      } else if (this.nature === "calm") {
        this.specialDefenseModifier = 1.1;
        this.attackModifier = 0.9;
      } else if (this.nature === "gentle") {
        this.specialDefenseModifier = 1.1;
        this.defenseModifier = 0.9;
      } else if (this.nature === "sassy") {
        this.specialDefenseModifier = 1.1;
        this.speedModifier = 0.9;
      } else if (this.nature === "careful") {
        this.specialDefenseModifier = 1.1;
        this.specialAttackModifier = 0.9;
      } 
    },
    calculateIVs: function() {
      this.ivArrayHP = [];
      this.ivArrayAttack = [];
      this.ivArrayDefense = [];
      this.ivArraySpecialAttack = [];
      this.ivArraySpecialDefense = [];
      this.ivArraySpeed = [];
      this.natureModifier();
      var i = 0;
      var testHP = 0;
      var testAttack = 0;
      var testDefense = 0;
      var testSpecialAttack = 0;
      var testSpecialDefense = 0;
      var testSpeed = 0;
      for (i = 0; i < 32; i++) {
        testHP = (((2 * parseInt(this.baseHP) + i + (parseInt(this.evHP) / 4)) * parseInt(this.level)) / 100) + parseInt(this.level) + 10;
        testHP = Math.floor(testHP);
        if (parseInt(this.hp) === testHP) {
          this.ivArrayHP.push(i);
        }
      }
      for (i = 0; i < 32; i++) {
        testAttack = ((((2 * parseInt(this.baseAttack) + i + (parseInt(this.evAttack) / 4)) * parseInt(this.level)) / 100) + 5) * parseFloat(this.attackModifier);
        testAttack = Math.floor(testAttack);
        if (parseInt(this.attack) === testAttack) {
          this.ivArrayAttack.push(i);
        }
      }
      for (i = 0; i < 32; i++) {
        testDefense = ((((2 * parseInt(this.baseDefense) + i + (parseInt(this.evDefense) / 4)) * parseInt(this.level)) / 100) + 5) * parseFloat(this.defenseModifier);
        testDefense = Math.floor(testDefense);
        if (parseInt(this.defense) === testDefense) {
          this.ivArrayDefense.push(i);
        }
      }
      for (i = 0; i < 32; i++) {
        testSpecialAttack = ((((2 * parseInt(this.baseSpecialAttack) + i + (parseInt(this.evSpecialAttack) / 4)) * parseInt(this.level)) / 100) + 5) * parseFloat(this.specialAttackModifier);
        testSpecialAttack = Math.floor(testSpecialAttack);
        if (parseInt(this.specialAttack) === testSpecialAttack) {
          this.ivArraySpecialAttack.push(i);
        }
      }
      for (i = 0; i < 32; i++) {
        testSpecialDefense = ((((2 * parseInt(this.baseSpecialDefense) + i + (parseInt(this.evSpecialDefense) / 4)) * parseInt(this.level)) / 100) + 5) * parseFloat(this.specialDefenseModifier);
        testSpecialDefense = Math.floor(testSpecialDefense);
        if (parseInt(this.specialDefense) === testSpecialDefense) {
          this.ivArraySpecialDefense.push(i);
        }
      }
      for (i = 0; i < 32; i++) {
        testSpeed = ((((2 * parseInt(this.baseSpeed) + i + (parseInt(this.evSpeed) / 4)) * parseInt(this.level)) / 100) + 5) * parseFloat(this.speedModifier);
        testSpeed = Math.floor(testSpeed);
        if (parseInt(this.speed) === testSpeed) {
          this.ivArraySpeed.push(i);
        }
      }
    },
    calculateStats: function() {
      this.natureModifier();
      this.calculatedHP = (((2 * parseInt(this.baseHP) + parseInt(this.ivHP) + (parseInt(this.evHP) / 4)) * parseInt(this.calculatedLevel)) / 100) + parseInt(this.calculatedLevel) + 10;
      this.calculatedHP = Math.floor(this.calculatedHP);
      this.calculatedAttack = ((((2 * parseInt(this.baseAttack) + parseInt(this.ivAttack) + (parseInt(this.evAttack) / 4)) * parseInt(this.calculatedLevel)) / 100) + 5) * parseFloat(this.attackModifier);
      this.calculatedAttack = Math.floor(this.calculatedAttack);
      this.calculatedDefense = ((((2 * parseInt(this.baseDefense) + parseInt(this.ivDefense) + (parseInt(this.evDefense) / 4)) * parseInt(this.calculatedLevel)) / 100) + 5) * parseFloat(this.defenseModifier);
      this.calculatedDefense = Math.floor(this.calculatedDefense);
      this.calculatedSpecialAttack = ((((2 * parseInt(this.baseSpecialAttack) + parseInt(this.ivSpecialAttack) + (parseInt(this.evSpecialAttack) / 4)) * parseInt(this.calculatedLevel)) / 100) + 5) * parseFloat(this.specialAttackModifier);
      this.calculatedSpecialAttack = Math.floor(this.calculatedSpecialAttack);
      this.calculatedSpecialDefense = ((((2 * parseInt(this.baseSpecialDefense) + parseInt(this.ivSpecialDefense) + (parseInt(this.evSpecialDefense) / 4)) * parseInt(this.calculatedLevel)) / 100) + 5) * parseFloat(this.specialDefenseModifier);
      this.calculatedSpecialDefense = Math.floor(this.calculatedSpecialDefense);
      this.calculatedSpeed = ((((2 * parseInt(this.baseSpeed) + parseInt(this.ivSpeed) + (parseInt(this.evSpeed) / 4)) * parseInt(this.calculatedLevel)) / 100) + 5) * parseFloat(this.speedModifier);
      this.calculatedSpeed = Math.floor(this.calculatedSpeed);
    }
  }
};
</script>
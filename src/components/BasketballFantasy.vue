<template>
  <div>
    <!-- Shooting GUard Below-->
    <select
      id="select-state"
      placeholder="Pick a Point Guard"
      v-on:change="filterMember(event, 'PG')"
      v-model="pselected"
    >
      <!-- v-model="selected"> -->
      <option
        v-for="p in basketballpgddl"
        v-bind:key="p.PLAYER"
        v-bind:value="p"
      >
        {{ p.PLAYER }}
      </option>
    </select>

    <table class="container" v-if="pselected">
      <tr>
        <td class="PositionTitle">Point Guard</td>
      </tr>
      <tr>
        <th>Player Name</th>
        <th>Position</th>
        <th>Points</th>
        <th>Rebound</th>
        <th>FT%</th>
      </tr>
      <tr v-for="p in basketballpg" v-bind:key="p.PLAYER">
        <td>{{ p.PLAYER }}</td>
        <!-- Rounded -->
        <!-- <td>{{Math.round((  p["FT%"].substring(0, p["FT%"].indexOf("("))*100) * 10, 2) / 10}}</td> -->
        <!-- Not ROunded -->
        <!-- <td>{{p["FT%"].substring(0, p["FT%"].indexOf("("))*100}}</td> -->
        <td>{{ p.POS }}</td>
        <td>{{ p.PTS }}</td>
        <td>{{ p.TREB }}</td>
        <td>{{ MathRoundUp(p["FT%"]) }}%</td>
        <!-- <td>{{AddingTotals(p["FT%"])}}</td> -->
        <!-- Comment:Json the values are strings turn to int -->
        <!-- <td>{{parseInt(m.TRB)+1}}</td> ˚ -->
      </tr>
    </table>
    <table class="container" v-else>
      <tr>
        <td class="PositionTitle">Point Guard</td>
      </tr>

      <td>
        <B>No Players(PG) Selected</B>
      </td>
    </table>
    <!-- Shooting GUard Below-->
    <select
      placeholder="Pick a ShootingGuard "
      v-on:change="filterMember(event, 'SG')"
      v-model="sgselected"
    >
      <!-- v-model="selected"> -->
      <option
        v-for="sg in basketballsgddl"
        v-bind:key="sg.PLAYER"
        v-bind:value="sg"
      >
        {{ sg.PLAYER }}
      </option>
    </select>

    <table class="container" v-if="sgselected">
      <tr>
        <td class="PositionTitle">Shooting Guard</td>
      </tr>
      <tr>
        <th>Player Name</th>
        <th>Position</th>
        <th>Points</th>
        <th>Rebound</th>
        <th>FT%</th>
      </tr>

      <tr v-for="sg in basketballsg" v-bind:key="sg.PLAYER">
        <td>{{ sg.PLAYER }}</td>
        <!-- <td>{{String(p['R#']).split(' ')[1]}}</td> -->
        <td>{{ sg.POS }}</td>
        <td>{{ sg.PTS }}</td>
        <td>{{ sg.TREB }}</td>
        <td>{{ MathRoundUp(sg["FT%"]) }}%</td>
        <!-- Comment:Json the values are strings turn to int -->
        <!-- <td>{{parseInt(m.TRB)+1}}</td> ˚ -->
      </tr>
    </table>
    <table class="container" v-else>
      <tr>
        <td class="PositionTitle">Shooting Guard</td>
      </tr>

      <td>
        <B>No Players(SG) Selected</B>
      </td>
    </table>

    <!-- SmallFOward Below -->
    <select v-on:change="filterMember(event, 'SF')" v-model="sfselected">
      <!-- v-model="selected"> -->
      <option
        v-for="m in basketballsfddl"
        v-bind:key="m.PLAYER"
        v-bind:value="m"
      >
        {{ m.PLAYER }}
      </option>
    </select>

    <table class="container" v-if="sfselected">
      <tr>
        <th>Small Forward</th>
      </tr>
      <tr>
        <th>Player Name</th>
        <!-- <th>Rank</th> -->
        <th>Position</th>
        <th>Points</th>
        <th>Rebound</th>
        <th>FT%</th>
      </tr>
      <tr v-for="m in basketballsf" v-bind:key="m.PLAYER">
        <td>{{ m.PLAYER }}</td>
        <!-- <td>{{m.Rk}}</td> -->
        <td>{{ m.POS }}</td>
        <td>{{ m.PTS }}</td>
        <td>{{ m.TREB }}</td>
        <td>{{ MathRoundUp(m["FT%"]) }}%</td>
        <!-- Comment:Json the values are strings turn to int -->
        <!-- <td>{{parseInt(m.TRB)+1}}</td> ˚ -->
      </tr>
    </table>
    <table class="container" v-else>
      <tr>
        <td class="PositionTitle">Small Foward</td>
      </tr>

      <td>
        <B>No Players(SF) Selected</B>
      </td>
    </table>
    <!-- Power Foward Below -->
    <select v-on:change="filterMember(event, 'PF')" v-model="pfselected">
      <!-- v-model="selected"> -->
      <option
        v-for="pf in basketballpfddl"
        v-bind:key="pf.PLAYER"
        v-bind:value="pf"
      >
        {{ pf.PLAYER }}
      </option>
    </select>

    <table class="container" v-if="pfselected">
      <tr>
        <th>Power Foward</th>
      </tr>
      <tr>
        <th>Player Name</th>
        <!-- <th>Rank</th> -->
        <th>Position</th>
        <th>Points</th>
        <th>Rebound</th>
        <th>FT%</th>
      </tr>
      <tr v-for="pf in basketballpf" v-bind:key="pf.PLAYER">
        <td>{{ pf.PLAYER }}</td>
        <!-- <td>{{m.Rk}}</td> -->
        <td>{{ pf.POS }}</td>
        <td>{{ pf.PTS }}</td>
        <td>{{ pf.TREB }}</td>
        <td>{{ MathRoundUp(pf["FT%"]) }}%</td>
        <!-- Comment:Json the values are strings turn to int -->
        <!-- <td>{{parseInt(m.TRB)+1}}</td> ˚ -->
      </tr>
    </table>
    <table class="container" v-else>
      <tr>
        <td class="PositionTitle">Power Foward</td>
      </tr>

      <td>
        <B>No Players(PF) Selected</B>
      </td>
    </table>
    <!-- Center Below -->
    <select v-on:change="filterMember(event, 'C')" v-model="cselected">
      <!-- v-model="selected"> -->
      <option
        v-for="c in basketballcddl"
        v-bind:key="c.PLAYER"
        v-bind:value="c"
      >
        {{ c.PLAYER }}
      </option>
    </select>

    <table class="container" v-if="cselected">
      <tr>
        <th>Center</th>
      </tr>
      <tr>
        <th>Player Name</th>
        <!-- <th>Rank</th> -->
        <th>Position</th>
        <th>Points</th>
        <th>Rebound</th>
        <th>FT%</th>
      </tr>
      <tr v-for="c in basketballc" v-bind:key="c.PLAYER">
        <td>{{ c.PLAYER }}</td>
        <!-- <td>{{m.Rk}}</td> -->
        <td>{{ c.POS }}</td>
        <td>{{ c.PTS }}</td>
        <td>{{ c.TREB }}</td>
        <td>{{ MathRoundUp(c["FT%"]) }}%</td>

        <!-- Comment:Json the values are strings turn to int -->
        <!-- <td>{{parseInt(m.TRB)+1}}</td> ˚ -->
      </tr>
    </table>
    <table class="container" v-else>
      <tr>
        <td class="PositionTitle">Center</td>
      </tr>

      <td>
        <B>No Players(c) Selected</B>
      </td>
    </table>
    <!-- Utl1 Below-->
    <select v-on:change="filterMember(event, 'UTL1')" v-model="UTL1selected">
      <!-- v-model="selected"> -->
      <option
        v-for="ult1 in basketballutl1ddl"
        v-bind:key="ult1.PLAYER"
        v-bind:value="ult1"
      >
        {{ ult1.PLAYER }}
      </option>
    </select>

    <table class="container" v-if="UTL1selected">
      <tr>
        <th>UTL1</th>
      </tr>
      <tr>
        <th>Player Name</th>
        <!-- <th>Rank</th> -->
        <th>Position</th>
        <th>Points</th>
        <th>Rebound</th>
        <th>FT%</th>
      </tr>
      <tr v-for="ult1 in basketballutl1" v-bind:key="ult1.PLAYER">
        <td>{{ ult1.PLAYER }}</td>
        <!-- <td>{{m.Rk}}</td> -->
        <td>{{ ult1.POS }}</td>
        <td>{{ ult1.PTS }}</td>
        <td>{{ ult1.TREB }}</td>
        <td>{{ MathRoundUp(ult1["FT%"]) }}%</td>

        <!-- Comment:Json the values are strings turn to int -->
        <!-- <td>{{parseInt(m.TRB)+1}}</td> ˚ -->
      </tr>
    </table>
    <table class="container" v-else>
      <tr>
        <td class="PositionTitle">UTL1</td>
      </tr>

      <td>
        <B>No Players(c) Selected</B>
      </td>
    </table>
    <!-- Utl2 Below-->
    <!-- Utl3 Below-->
    <!-- Total Below  -->
    <table class="container">
      <tr>
        <th>Total</th>
      </tr>
      <tr>
        <!-- <th>Rank</th> -->
        <th>Total Points</th>
        <th>Total Rebound</th>
        <th>FT%</th>
        <th>FG%</th>
      </tr>
      <tr>
        <td>
          {{
            AddingTotals(
              pselected.PTS,
              sfselected.PTS,
              sgselected.PTS,
              pfselected.PTS,
              cselected.PTS,
              UTL1selected.PTS

            )
          }}
        </td>

        <td>
          {{
            AddingTotals(
              pselected.TREB,
              sfselected.TREB,
              sgselected.TREB,
              pfselected.TREB,
              cselected.TREB,
              UTL1selected.PTS
            )
          }}
        </td>
        <td>
          {{
            TakingAverage(
              pselected["FT%"],
              sfselected["FT%"],
              sgselected["FT%"],
              pfselected["FT%"],
              cselected["FT%"],
              UTL1selected["FT%"]
            )
          }}%
        </td>
        <td>
          {{
            TakingAverage(
              pselected["FG%"],
              sfselected["FG%"],
              sgselected["FG%"],
              pfselected["FG%"],
              cselected["FG%"],
              UTL1selected["FG%"]
            )
          }}%
        </td>
        <!-- Comment:Json the values are strings turn to int -->
        <!-- <td>{{parseInt(m.TRB)+1}}</td> ˚ -->
        <td></td>
      </tr>
    </table>
  </div>
</template>




<script>
import data from "./testfile2.json";
var basketball = data;
var pointGuard = "PG";
var smallFoward = "SF";
var shootingGuard = "SG";
var PowerFoward = "PF";
var Center = "C";
var num = []; // caculate the average
var PostionPG = basketball.filter(function (e) {
  if (e.POS.toLowerCase().indexOf(pointGuard.toLowerCase()) > -1) return e;
});
var PositonSG = basketball.filter(function (e) {
  if (e.POS.toLowerCase().indexOf(shootingGuard.toLowerCase()) > -1) return e;
});
var PostionSF = basketball.filter(function (e) {
  if (e.POS.toLowerCase().indexOf(smallFoward.toLowerCase()) > -1) return e;
});
var PostionPF = basketball.filter(function (e) {
  if (e.POS.toLowerCase().indexOf(PowerFoward.toLowerCase()) > -1) return e;
});
var PostionC = basketball.filter(function (e) {
  if (e.POS.toLowerCase().indexOf(Center.toLowerCase()) > -1) return e;
});

const fiilterF = d => d['POS'].includes('F');
const fiilterG = d => d['POS'].includes('G');
var PostionG = basketball.filter(fiilterF);
var PostionF = basketball.filter(fiilterG);
export default {
  name: "form-example",
  data: () => ({
    basketball: basketball,
    basketballddl: basketball,
    basketballpgddl: PostionPG,
    basketballsgddl: PositonSG,
    basketballsfddl: PostionSF,
    basketballpfddl: PostionPF,
    basketballcddl: PostionC,
    basketballgddl: PostionG, //this one is guards so i have to find a new filter for this.
    basketballfddl: PostionF, //this one is guards so i have to find a new filter for this.
    basketballutl1ddl: basketball,
    basketballutl2ddl: basketball,
    basketballutl3ddl: basketball,
    basketballpg: PostionPG,
    basketballsg: PositonSG,
    basketballsf: PostionSF,
    basketballpf: PostionPF,
    basketballc: PostionC,
    basketballg: PostionG, // this one is guards so i have to find a new filter for this
    basketballf: PostionF, // this one is guards so i have to find a new filter for this
    basketballutl1: basketball,
    basketballutl2: basketball,
    basketballutl3: basketball,
    playernames: [],
    SF: "",
    event: "",
    selected: "",
    pselected: "",
    sgselected: "",
    sfselected: "",
    pfselected: "",
    cselected: "",
    gselected: "", // this is one guards only
    fselected: "", // this one fowards only
    UTL1selected: "",
    UTL2selected: "",
    UTL3selected: "",
    g: "",
    UTL1: "",
    UTL2: "",
    UTL3: "",
    p: "",
    m: "",
  }),
  methods: {
    filterMember: function (evt, type) {
      //var val = evt.target.value;
      var vm = this;
      var valsf = vm.sfselected;
      console.log(type);
      if (type === "SF") {
        console.log(valsf);
        // They are case senstive so yeh....
        console.log(
          basketball.filter(function (e) {
            return e.PLAYER === valsf["PLAYER"];
          })
        );
        this.basketballsf = PostionSF.filter(function (e) {
          return e.PLAYER === valsf["PLAYER"];
        });
      } else if (type === "PG") {
        var valpg = vm.pselected;
        console.log(valpg + "barney");
        // They are case senstive so yeh....
        console.log(
          PostionPG.filter(function (e) {
            return e.PLAYER === valpg["PLAYER"];
          })
        );
        this.basketballpg = PostionPG.filter(function (e) {
          return e.PLAYER === valpg["PLAYER"];
        });
      } else if (type === "SG") {
        var valsg = vm.sgselected;
        console.log(valsg);
        console.log(
          PositonSG.filter(function (e) {
            return e.PLAYER === valsg["PLAYER"];
          })
        );
        this.basketballsg = PositonSG.filter(function (e) {
          return e.PLAYER === valsg["PLAYER"];
        });
      } else if (type === "PF") {
        var valpf = vm.pfselected;
        console.log(valpf);
        console.log(
          PostionPF.filter(function (e) {
            return e.PLAYER === valpf["PLAYER"];
          })
        );
        this.basketballpf = PostionPF.filter(function (e) {
          return e.PLAYER === valpf["PLAYER"];
        });
      } else if (type === "C") {
        var valc = vm.cselected;
        console.log(valc);
        console.log(
          PostionC.filter(function (e) {
            return e.PLAYER === valc["PLAYER"];
          })
        );
        this.basketballc = PostionC.filter(function (e) {
          return e.PLAYER === valc["PLAYER"];
        });
      } else if (type === "UTL1") {
        var val1 = vm.UTL1selected;
        console.log(val1);
        console.log(
          basketball.filter(function (e) {
            return e.PLAYER === val1["PLAYER"];
          })
        );
        this.basketballutl1 = basketball.filter(function (e) {
          return e.PLAYER === val1["PLAYER"];
        });
      } 
      
      //else if (type === "UTL2") {
      //   var val2 = vm.cselected;
      //   console.log(val2);
      //   console.log(
      //     PostionC.filter(function (e) {
      //       return e.PLAYER === val2["PLAYER"];
      //     })
      //   );
      //   this.basketballc = PostionC.filter(function (e) {
      //     return e.PLAYER === val2["PLAYER"];
      //   });
      // } 
      // else if (type === "UTL3") {
      //   var val3 = vm.cselected;
      //   console.log(val3);
      //   console.log(
      //     PostionC.filter(function (e) {
      //       return e.PLAYER === val3["PLAYER"];
      //     })
      //   );
      //   this.basketballc = PostionC.filter(function (e) {
      //     return e.PLAYER === val3["PLAYER"];
      //   });
      // } 
      
      else {
        console.log("no");
      }
    },
    MathRoundUp: function (string) {
     // var number = String(string).substring(0, String(string).indexOf("("));
      return (
        Math.round(
          parseInt(
            String(string).substring(0, String(string).indexOf("(")) * 100
          ) * 10,
          2
        ) / 10
      );
    },
    AddingTotals: function (
      Point = 0,
      Shoot = 0,
      Small = 0,
      Power = 0,
      Center = 0,
      Guard = 0,
      Foward = 0,
      UTL1 = 0,
      UTL2 = 0,
      UTL3 = 0
    ) {
      console.log(Point + "Barney");
      console.log(this.MathRoundUp);
      return (
        parseInt(Point) +
        parseInt(Shoot) +
        parseInt(Small) +
        parseInt(Power) +
        parseInt(Center) +
        parseInt(Guard) +
        parseInt(Foward) +
        parseInt(UTL1) +
        parseInt(UTL2) +
        parseInt(UTL3)
      );
    },
    TakingAverage: function (
      Point = 0,
      Shoot = 0,
      Small = 0,
      Power = 0,
      Center = 0,
      Guard = 0,
      Foward = 0,
      UTL1 = 0,
      UTL2 = 0,
      UTL3 = 0
    ) {
      if (Point != 0) {
        if (!num.includes("Point")) {
          num.push("Point");
        }
      }
      if (Shoot != 0) {
        if (!num.includes("Shoot")) {
          num.push("Shoot");
        }
      }

      if (Small != 0) {
        if (!num.includes("Small")) {
          num.push("Small");
        }
      }
      if (Power != 0) {
        if (!num.includes("Power")) {
          num.push("Power");
        }
      }

      if (Center != 0) {
        if (!num.includes("Center")) {
          num.push("Center");
        }
      }

      if (Guard != 0) {
        if (!num.includes("Guard")) {
          num.push("Guard");
        }
      }
      if (Foward != 0) {
        if (!num.includes("Foward")) {
          num.push("Foward");
        }
      }
      if (UTL1 != 0) {
        if (!num.includes("UTL1")) {
          num.push("UTL1");
        }
      }

      if (UTL2 != 0) {
        if (!num.includes("UTL1")) {
          num.push("UTL1");
        }
      }
      if (UTL3 != 0) {
        if (!num.includes("UTL1")) {
          num.push("UTL1");
        }
      }
      console.log(num.length);
      console.log(Point);
      console.log(num);
      return (
        (parseInt(this.MathRoundUp(Point)) +
          parseInt(this.MathRoundUp(Shoot)) +
          parseInt(this.MathRoundUp(Small)) +
          parseInt(this.MathRoundUp(Power)) +
          parseInt(this.MathRoundUp(Center)) +
          parseInt(this.MathRoundUp(Guard)) +
          parseInt(this.MathRoundUp(Foward)) +
          parseInt(this.MathRoundUp(UTL1)) +
          parseInt(this.MathRoundUp(UTL2)) +
          parseInt(this.MathRoundUp(UTL3))) /
        num.length
      );
    },
  },
  test: function (string) {
    return string;
  },
};
</script>





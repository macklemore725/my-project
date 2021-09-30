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
        <!-- <th>Points</th> -->
        <!-- <th>Rebound</th>
        <th>FT%</th> -->
      </tr>
      <tr v-for="p in basketballpg" v-bind:key="p.PLAYER">
        <td>{{ p.PLAYER }}</td>
        <!-- Rounded -->
        <!-- <td>{{Math.round((  p["FT%"].substring(0, p["FT%"].indexOf("("))*100) * 10, 2) / 10}}</td> -->
        <!-- Not ROunded -->
        <!-- <td>{{p["FT%"].substring(0, p["FT%"].indexOf("("))*100}}</td> -->
        <td>{{ p.POS }}</td>
        <!-- <td>{{ p.PTS }}</td> -->
        <!-- <td>{{ p.TREB }}</td>
        <td>{{ MathRoundUp(p["FT%"]) }}%</td> -->
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
        <!-- <th>Points</th> -->
        <!-- <th>Rebound</th>
        <th>FT%</th> -->
      </tr>

      <tr v-for="sg in basketballsg" v-bind:key="sg.PLAYER">
        <td>{{ sg.PLAYER }}</td>
        <!-- <td>{{String(p['R#']).split(' ')[1]}}</td> -->
        <td>{{ sg.POS }}</td>
        <!-- <td>{{ sg.PTS }}</td> -->
        <!-- <td>{{ sg.TREB }}</td>
        <td>{{ MathRoundUp(sg["FT%"]) }}%</td> -->
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
        <td class="PositionTitle">Small Foward</td>
      </tr>
      <tr>
        <th>Player Name</th>
        <th>Position</th>
        <!-- <th>Points</th> -->
        <!-- <th>Rebound</th>
        <th>FT%</th> -->
      </tr>
      <tr v-for="m in basketballsf" v-bind:key="m.PLAYER">
        <td>{{ m.PLAYER }}</td>
        <!-- <td>{{m.Rk}}</td> -->
        <td>{{ m.POS }}</td>
        <!-- <td>{{ m.PTS }}</td> -->
        <!-- <td>{{ m.TREB }}</td>
        <td>{{ MathRoundUp(m["FT%"]) }}%</td> -->
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
        <td class="PositionTitle">Power Foward</td>
      </tr>

      <tr>
        <th>Player Name</th>
        <th>Position</th>
        <!-- <th>Points</th> -->
        <!-- <th>Rebound</th>
        <th>FT%</th> -->
      </tr>
      <tr v-for="pf in basketballpf" v-bind:key="pf.PLAYER">
        <td>{{ pf.PLAYER }}</td>
        <!-- <td>{{m.Rk}}</td> -->
        <td>{{ pf.POS }}</td>
        <!-- <td>{{ pf.PTS }}</td> -->
        <!-- <td>{{ pf.TREB }}</td>
        <td>{{ MathRoundUp(pf["FT%"]) }}%</td> -->
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
        <td class="PositionTitle">Center</td>
      </tr>
      <tr>
        <th>Player Name</th>
        <th>Position</th>
        <!-- <th>Points</th> -->
        <!-- <th>Rebound</th>
        <th>FT%</th> -->
      </tr>
      <tr v-for="c in basketballc" v-bind:key="c.PLAYER">
        <td>{{ c.PLAYER }}</td>
        <!-- <td>{{m.Rk}}</td> -->
        <td>{{ c.POS }}</td>
        <!-- <td>{{ c.PTS }}</td> -->
        <!-- <td>{{ c.TREB }}</td>
        <td>{{ MathRoundUp(c["FT%"]) }}%</td> -->

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
    <!-- G Below-->
    <select v-on:change="filterMember(event, 'G')" v-model="gselected">
      <!-- v-model="selected"> -->
      <option
        v-for="g in basketballgddl"
        v-bind:key="g.PLAYER"
        v-bind:value="g"
      >
        {{ g.PLAYER }}
      </option>
    </select>

    <table class="container" v-if="gselected">
      <tr>
        <td class="PositionTitle">G</td>
      </tr>
      <tr>
        <th>Player Name</th>
        <th>Position</th>
        <!-- <th>Points</th> -->
        <!-- <th>Rebound</th>
        <th>FT%</th> -->
      </tr>
      <tr v-for="g in basketballg" v-bind:key="g.PLAYER">
        <td>{{ g.PLAYER }}</td>
        <!-- <td>{{m.Rk}}</td> -->
        <td>{{ g.POS }}</td>
        <!-- <td>{{ g.PTS }}</td> -->
        <!-- <td>{{ g.TREB }}</td>
        <td>{{ MathRoundUp(g["FT%"]) }}%</td> -->

        <!-- Comment:Json the values are strings turn to int -->
        <!-- <td>{{parseInt(m.TRB)+1}}</td> ˚ -->
      </tr>
    </table>
    <table class="container" v-else>
      <tr>
        <td class="PositionTitle">G</td>
      </tr>

      <td>
        <B>No Players(c) Selected</B>
      </td>
    </table>
    <!-- F Below-->
    <select v-on:change="filterMember(event, 'F')" v-model="fselected">
      <!-- v-model="selected"> -->
      <option
        v-for="f in basketballfddl"
        v-bind:key="f.PLAYER"
        v-bind:value="f"
      >
        {{ f.PLAYER }}
      </option>
    </select>

    <table class="container" v-if="fselected">
      <tr>
        <td class="PositionTitle">F</td>
      </tr>
      <tr>
        <th>Player Name</th>
        <th>Position</th>
        <!-- <th>Points</th> -->
        <!-- <th>Rebound</th>
        <th>FT%</th> -->
      </tr>
      <tr v-for="f in basketballf" v-bind:key="f.PLAYER">
        <td>{{ f.PLAYER }}</td>
        <!-- <td>{{m.Rk}}</td> -->
        <td>{{ f.POS }}</td>
        <!-- <td>{{ f.PTS }}</td> -->
        <!-- <td>{{ f.TREB }}</td>
        <td>{{ MathRoundUp(f["FT%"]) }}%</td> -->

        <!-- Comment:Json the values are strings turn to int -->
        <!-- <td>{{parseInt(m.TRB)+1}}</td> ˚ -->
      </tr>
    </table>
    <table class="container" v-else>
      <tr>
        <td class="PositionTitle">F</td>
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
        <td class="PositionTitle">UTL1</td>
      </tr>
      <tr>
        <th>Player Name</th>
        <th>Position</th>
        <!-- <th>Points</th> -->
        <!-- <th>Rebound</th>
        <th>FT%</th> -->
      </tr>
      <tr v-for="ult1 in basketballutl1" v-bind:key="ult1.PLAYER">
        <td>{{ ult1.PLAYER }}</td>
        <!-- <td>{{m.Rk}}</td> -->
        <!-- <td>{{ ult1.POS }}</td> -->
        <td>{{ ult1.PTS }}</td>
        <!-- <td>{{ ult1.TREB }}</td>
        <td>{{ MathRoundUp(ult1["FT%"]) }}%</td> -->

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
    <select v-on:change="filterMember(event, 'UTL2')" v-model="UTL2selected">
      <!-- v-model="selected"> -->
      <option
        v-for="ult2 in basketballutl2ddl"
        v-bind:key="ult2.PLAYER"
        v-bind:value="ult2"
      >
        {{ ult2.PLAYER }}
      </option>
    </select>

    <table class="container" v-if="UTL2selected">
      <tr>
        <td class="PositionTitle">UTL2</td>
      </tr>
      <tr>
        <th>Player Name</th>
        <th>Position</th>
        <!-- <th>Points</th> -->
        <!-- <th>Rebound</th>
        <th>FT%</th> -->
      </tr>
      <tr v-for="ult2 in basketballutl2" v-bind:key="ult2.PLAYER">
        <td>{{ ult2.PLAYER }}</td>
        <!-- <td>{{m.Rk}}</td> -->
        <td>{{ ult2.POS }}</td>
        <!-- <td>{{ ult2.PTS }}</td>
        <td>{{ ult2.TREB }}</td>
        <td>{{ MathRoundUp(ult2["FT%"]) }}%</td> -->

        <!-- Comment:Json the values are strings turn to int -->
        <!-- <td>{{parseInt(m.TRB)+1}}</td> ˚ -->
      </tr>
    </table>
    <table class="container" v-else>
      <tr>
        <td class="PositionTitle">UTL2</td>
      </tr>

      <td>
        <B>No Players(c) Selected</B>
      </td>
    </table>
    <!-- Utl3 Below-->
    <select v-on:change="filterMember(event, 'UTL3')" v-model="UTL3selected">
      <!-- v-model="selected"> -->
      <option
        v-for="ult3 in basketballutl3ddl"
        v-bind:key="ult3.PLAYER"
        v-bind:value="ult3"
      >
        {{ ult3.PLAYER }}
      </option>
    </select>

    <table class="container" v-if="UTL3selected">
      <tr>
        <td class="PositionTitle">UTL3</td>
      </tr>
      <tr>
        <th>Player Name</th>
        <th>Position</th>
        <!-- <th>Points</th> -->
        <!-- <th>Rebound</th>
        <th>FT%</th> -->
      </tr>
      <tr v-for="ult3 in basketballutl3" v-bind:key="ult3.PLAYER">
        <td>{{ ult3.PLAYER }}</td>
        <!-- <td>{{m.Rk}}</td> -->
        <td>{{ ult3.POS }}</td>
        <!-- <td>{{ ult3.PTS }}</td>
        <td>{{ ult3.TREB }}</td>
        <td>{{ MathRoundUp(ult3["FT%"]) }}%</td> -->

        <!-- Comment:Json the values are strings turn to int -->
        <!-- <td>{{parseInt(m.TRB)+1}}</td> ˚ -->
      </tr>
    </table>
    <table class="container" v-else>
      <tr>
        <td class="PositionTitle">UTL3</td>
      </tr>

      <td>
        <B>No Players(c) Selected</B>
      </td>
    </table>

    <hr />
    <!-- Total Below  -->
    <table class = "container">
      <tr>
        <th> Player Picked </th> 
        </tr>
       <tr>
         <th>Pos</th>
        <th>Player</th>
        <th> Points</th>
        <th> Rebound</th>
        <th>Steal</th>
        <th>TurnOver</th>
        <th>Block</th>
        <th>Assist</th>
        <th>3PM</th>
        <th>FT%</th>
        <th>FG%</th>
      </tr>
        <tr>
          <td>
            Point Guard
            </td>
        <td>
         {{pselected.PLAYER}}
        </td>
          <td>
         {{pselected.PTS}}
        </td>
          <td>
         {{pselected.TREB}}
        </td>
          <td>
         {{pselected.STL}}
        </td>
          <td>
         {{pselected.TO}}
        </td>
          <td>
         {{pselected.BLK}}
        </td>
          <td>
         {{pselected.AST}}
        </td>
          <td>
         {{pselected["3PM"]}}
        </td>
          <td>
         {{pselected["FT%"]}}
        </td>
          <td>
         {{pselected["FG%"]}}
        </td>
      </tr>
      <tr>
         <td>
         Shooting Guard
            </td>
        <td>
         {{sgselected.PLAYER}}
        </td>
          <td>
         {{sgselected.PTS}}
        </td>
          <td>
         {{sgselected.TREB}}
        </td>
          <td>
         {{sgselected.STL}}
        </td>
          <td>
         {{sgselected.TO}}
        </td>
          <td>
         {{sgselected.BLK}}
        </td>
          <td>
         {{sgselected.AST}}
        </td>
          <td>
         {{sgselected["3PM"]}}
        </td>
          <td>
         {{sgselected["FT%"]}}
        </td>
          <td>
         {{sgselected["FG%"]}}
        </td>
      </tr>
      <tr>
          <td>
         Small Foward
            </td>
        <td>
         {{sfselected.PLAYER}}
        </td>
          <td>
         {{sfselected.PTS}}
        </td>
          <td>
         {{sfselected.TREB}}
        </td>
          <td>
         {{sfselected.STL}}
        </td>
          <td>
         {{sfselected.TO}}
        </td>
          <td>
         {{sfselected.BLK}}
        </td>
          <td>
         {{sfselected.AST}}
        </td>
          <td>
         {{sfselected["3PM"]}}
        </td>
          <td>
         {{sfselected["FT%"]}}
        </td>
          <td>
         {{sfselected["FG%"]}}
        </td>
      </tr>
      <tr>
          <td>
        Power Forward
            </td>
        <td>
         {{pfselected.PLAYER}}
        </td>
          <td>
         {{pfselected.PTS}}
        </td>
          <td>
         {{pfselected.TREB}}
        </td>
          <td>
         {{pfselected.STL}}
        </td>
          <td>
         {{pfselected.TO}}
        </td>
          <td>
         {{pfselected.BLK}}
        </td>
          <td>
         {{pfselected.AST}}
        </td>
          <td>
         {{pfselected["3PM"]}}
        </td>
          <td>
         {{pfselected["FT%"]}}
        </td>
          <td>
         {{pfselected["FG%"]}}
        </td>
      </tr>
      <tr>
          <td>
         Center
            </td>
        <td>
         {{cselected.PLAYER}}
        </td>
          <td>
         {{cselected.PTS}}
        </td>
          <td>
         {{cselected.TREB}}
        </td>
          <td>
         {{cselected.STL}}
        </td>
          <td>
         {{cselected.TO}}
        </td>
          <td>
         {{cselected.BLK}}
        </td>
          <td>
         {{cselected.AST}}
        </td>
          <td>
         {{cselected["3PM"]}}
        </td>
          <td>
         {{cselected["FT%"]}}
        </td>
          <td>
         {{cselected["FG%"]}}
        </td>
      </tr>
      <tr>
          <td>
          Guard
            </td>
        <td>
         {{gselected.PLAYER}}
        </td>
          <td>
         {{gselected.PTS}}
        </td>
          <td>
         {{gselected.TREB}}
        </td>
          <td>
         {{gselected.STL}}
        </td>
          <td>
         {{gselected.TO}}
        </td>
          <td>
         {{gselected.BLK}}
        </td>
          <td>
         {{gselected.AST}}
        </td>
          <td>
         {{gselected["3PM"]}}
        </td>
          <td>
         {{gselected["FT%"]}}
        </td>
          <td>
         {{gselected["FG%"]}}
        </td>
      </tr>
<tr>
    <td>
       Foward
            </td>
        <td>
         {{fselected.PLAYER}}
        </td>
          <td>
         {{fselected.PTS}}
        </td>
          <td>
         {{fselected.TREB}}
        </td>
          <td>
         {{fselected.STL}}
        </td>
          <td>
         {{fselected.TO}}
        </td>
          <td>
         {{fselected.BLK}}
        </td>
          <td>
         {{fselected.AST}}
        </td>
          <td>
         {{fselected["3PM"]}}
        </td>
          <td>
         {{fselected["FT%"]}}
        </td>
          <td>
         {{fselected["FG%"]}}
        </td>
      </tr>
      <tr>
          <td>
         UTL1
            </td>
        <td>
         {{UTL1selected.PLAYER}}
        </td>
          <td>
         {{UTL1selected.PTS}}
        </td>
          <td>
         {{UTL1selected.TREB}}
        </td>
          <td>
         {{UTL1selected.STL}}
        </td>
          <td>
         {{UTL1selected.TO}}
        </td>
          <td>
         {{UTL1selected.BLK}}
        </td>
          <td>
         {{UTL1selected.AST}}
        </td>
          <td>
         {{UTL1selected["3PM"]}}
        </td>
          <td>
         {{UTL1selected["FT%"]}}
        </td>
          <td>
         {{UTL1selected["FG%"]}}
        </td>
      </tr>
      <tr>
          <td>
         UTL2
            </td>
        <td>
         {{UTL2selected.PLAYER}}
        </td>
          <td>
         {{UTL2selected.PTS}}
        </td>
          <td>
         {{UTL2selected.TREB}}
        </td>
          <td>
         {{UTL2selected.STL}}
        </td>
          <td>
         {{UTL2selected.TO}}
        </td>
          <td>
         {{UTL2selected.BLK}}
        </td>
          <td>
         {{UTL2selected.AST}}
        </td>
          <td>
         {{UTL2selected["3PM"]}}
        </td>
          <td>
         {{UTL2selected["FT%"]}}
        </td>
          <td>
         {{UTL2selected["FG%"]}}
        </td>
      </tr>
      <tr>
          <td>
         ULT3
            </td>
        <td>
         {{UTL3selected.PLAYER}}
        </td>
          <td>
         {{UTL3selected.PTS}}
        </td>
          <td>
         {{UTL3selected.TREB}}
        </td>
          <td>
         {{UTL3selected.STL}}
        </td>
          <td>
         {{UTL3selected.TO}}
        </td>
          <td>
         {{UTL3selected.BLK}}
        </td>
          <td>
         {{UTL3selected.AST}}
        </td>
          <td>
         {{UTL3selected["3PM"]}}
        </td>
          <td>
         {{UTL3selected["FT%"]}}
        </td>
          <td>
         {{UTL3selected["FG%"]}}
        </td>
      </tr>
    </table>
    <table class="container">
      <tr>
        <th>Total</th>
      </tr>
      <tr>
        <!-- <th>Rank</th> -->

        <th>Total Points</th>
        <th>Total Rebound</th>
        <th>Steal</th>
        <th>TurnOver</th>
        <th>Block</th>
        <th>Assist</th>
        <th>3PM</th>
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
              gselected.PTS,
              fselected.PTS,
              UTL1selected.PTS,
              UTL2selected.PTS,
              UTL3selected.PTS
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
              gselected.TREB,
              fselected.TREB,
              UTL1selected.TREB,
              UTL2selected.TREB,
              UTL3selected.TREB
            )
          }}
        </td>
        <td>
          {{
            AddingTotals(
              pselected.STL,
              sfselected.STL,
              sgselected.STL,
              pfselected.STL,
              cselected.STL,
              gselected.STL,
              fselected.STL,
              UTL1selected.STL,
              UTL2selected.STL,
              UTL3selected.STL
            )
          }}
        </td>
        <td>
          {{
            AddingTotals(
              pselected.TO,
              sfselected.TO,
              sgselected.TO,
              pfselected.TO,
              cselected.TO,
              gselected.TO,
              fselected.TO,
              UTL1selected.TO,
              UTL2selected.TO,
              UTL3selected.TO
            )
          }}
        </td>
        <td>
          {{
            AddingTotals(
              pselected.BLK,
              sfselected.BLK,
              sgselected.BLK,
              pfselected.BLK,
              cselected.BLK,
              gselected.BLK,
              fselected.BLK,
              UTL1selected.BLK,
              UTL2selected.BLK,
              UTL3selected.BLK
            )
          }}
        </td>
        <td>
          {{
            AddingTotals(
              pselected.AST,
              sfselected.AST,
              sgselected.AST,
              pfselected.AST,
              cselected.AST,
              gselected.AST,
              fselected.AST,
              UTL1selected.AST,
              UTL2selected.AST,
              UTL3selected.AST
            )
          }}
        </td>
        <td>
          {{
            AddingTotals(
              pselected["3PM"],
              sfselected["3PM"],
              sgselected["3PM"],
              pfselected["3PM"],
              cselected["3PM"],
              gselected["3PM"],
              fselected["3PM"],
              UTL1selected["3PM"],
              UTL2selected["3PM"],
              UTL3selected["3PM"]
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
              gselected["FT%"],
              fselected["FT%"],
              UTL1selected["FT%"],
              UTL2selected["FT%"],
              UTL3selected["FT%"]
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
              gselected["FG%"],
              fselected["FG%"],
              UTL1selected["FG%"],
              UTL2selected["FG%"],
              UTL3selected["FG%"]
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

const fiilterF = (d) => d["POS"].includes("F");
const fiilterG = (d) => d["POS"].includes("G");
var PostionG = basketball.filter(fiilterG);
var PostionF = basketball.filter(fiilterF);
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
        var valult1 = vm.UTL1selected;
        console.log(valult1);
        console.log(
          basketball.filter(function (e) {
            return e.PLAYER === valult1["PLAYER"];
          })
        );
        this.basketballutl1 = basketball.filter(function (e) {
          return e.PLAYER === valult1["PLAYER"];
        });
      } else if (type === "UTL2") {
        var valult2 = vm.UTL2selected;
        console.log(valult2);
        console.log(
          basketball.filter(function (e) {
            return e.PLAYER === valult2["PLAYER"];
          })
        );
        this.basketballutl2 = basketball.filter(function (e) {
          return e.PLAYER === valult2["PLAYER"];
        });
      } else if (type === "UTL3") {
        var valult3 = vm.UTL3selected;
        console.log(valult3);
        console.log(
          basketball.filter(function (e) {
            return e.PLAYER === valult3["PLAYER"];
          })
        );
        this.basketballutl3 = basketball.filter(function (e) {
          return e.PLAYER === valult3["PLAYER"];
        });
      } else if (type === "G") {
        var valg = vm.gselected;
        console.log(valg);
        console.log(
          basketball.filter(function (e) {
            return e.PLAYER === valg["PLAYER"];
          })
        );
        this.basketballg = basketball.filter(function (e) {
          return e.PLAYER === valg["PLAYER"];
        });
      } else if (type === "F") {
        var valf = vm.fselected;
        console.log(valf);
        console.log(
          basketball.filter(function (e) {
            return e.PLAYER === valf["PLAYER"];
          })
        );
        this.basketballf = basketball.filter(function (e) {
          return e.PLAYER === valf["PLAYER"];
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
        if (!num.includes("UTL2")) {
          num.push("UTL2");
        }
      }
      if (UTL3 != 0) {
        if (!num.includes("UTL3")) {
          num.push("UTL3");
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





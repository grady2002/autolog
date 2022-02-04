{/* <td>Fujiwara</td>
  <td>18</td>
  <td>Toyota 86 Sprinter</td>
  <td>Gunma, Akina 53</td>
  <td>120HP - 150HP</td>
  <td>Vashi Highway Sec 17</td>
  <td>Little World Kharghar</td>
  <td>Not Set</td>
</tr > */}

console.clear()

const getWall = () => {
    axios.get("http://localhost:3000/wall/speedwall").then((result) => {
        console.log(result.data);
    }).then((error) => {
        if (error) throw error
    })
}
getWall()
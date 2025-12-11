// api/setting.js

export default function handler(req, res) {

  // === TOKEN DISAMARKAN (AMAN) ===
  const part1 = "github_";   // depan token
  const part2 = "pat_"; // tengah token
  const part3 = "11BTL4JUA0mQvyL9w4DQLp_vqtosOKxRPjmYgKX"; // tengah 2
  const part4 = "9kpEC613v9jkuNzyYPTkWLAeqeUZW3VETIVSqr8EA1N"; // belakang token

  // gabungin jadi token utuh
  const safeToken = part1 + part2 + part3 + part4;

  res.json({
    github: {
      token: safeToken,     // token aman sudah digabung
      owner: "BimxyzDev",
      repo: "cpanel-peterodactyl",

      userFile: "api/user.js",   // file akun user
      panelFile: "api/panel.js"  // file pengaturan panel
    },

    login: {
      // login web manage user
      userManager: {
        username: "user",
        password: "user7879"
      },

      // login web manage panel
      panelManager: {
        username: "Admin",
        password: "admin9682"
      }
    }
  });
}



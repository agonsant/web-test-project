var config = {
    nexus: {
        groupId: 'web.test',
        artifactId: 'web-test-project',
        packaging: 'zip',
        auth: {
          username: 'admin',
          password: 'admin123'
        },
        pomDir: 'dist/pom',
        url: 'http://localhost:8081/repository/npmLibraries',
        quiet: false,
        insecure: true
      }
};

module.exports = config;

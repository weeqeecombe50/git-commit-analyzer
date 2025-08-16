const { exec } = require('child_process');

class GitAnalyzer {
  constructor(repoPath) {
    this.repoPath = repoPath;
  }

  analyzeCommits(callback) {
    exec(`git -C ${this.repoPath} log --pretty=format:'%h %an %ad %s' --date=short`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Fehler beim Ausführen des Git-Befehls: ${error}`);
        return;
      }
      callback(stdout);
    });
  }

  // Hier können weitere Analyse-Methoden hinzugefügt werden.
}

module.exports = GitAnalyzer;
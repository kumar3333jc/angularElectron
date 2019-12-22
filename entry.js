const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
var sqlite3 = require('sqlite3').verbose();
const { autoUpdater } = require('electron-updater');

let win
const userDataPath = (app).getPath('userData');

var dbpath = path.join(userDataPath, '/DB/', 'database.sqlite');

if (!fs.existsSync(dbpath)) {
    if (!fs.existsSync(userDataPath)) {
        fs.mkdirSync(userDataPath);
    }
    fs.mkdirSync(path.join(userDataPath, '/DB/'));
    fs.openSync(dbpath, 'w')
}

var db = new sqlite3.Database(dbpath);

db.serialize(function () {
    db.run("CREATE TABLE IF NOT EXISTS ITR (id INTEGER PRIMARY KEY AUTOINCREMENT, form_type text, itr_type text, user_id text, form_value blob, form_id text)", (err, rows) => {
        if (err) {
            console.log(err)
        }
        console.log('table created sucessfully')
    });
});
//db.close();

app.on('ready', () => {
    createWindow();
    autoUpdater.checkForUpdatesAndNotify();
})

function createWindow() {
    const { screen } = require('electron')
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    // Create the browser window.
    win = new BrowserWindow({
        width, height,
        webPreferences: {
            nodeIntegration: true,
            backgroundThrottling: false,
            plugins: true
        }
    })
    win.removeMenu();

    // and load the index.html of the app.
    win.loadURL(`file://${__dirname}/dist/NXTAngularSample/index.html`);


    // Open the DevTools.
    win.webContents.openDevTools()

    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })
}


// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
})



ipcMain.on("save-data", async (event, item) => {
    console.log(item);
    try {
        return await db.each("INSERT INTO ITR(form_value) VALUES ("+item+")", function(err, row) {
            if(err){
                event.returnValue= err;
                console.log(err)
            }
            event.returnValue= row;
        });
    } catch (err) {
        throw err;
    }
});

ipcMain.on('get-items', async (event) => {
    try {
        await knex.select('*').from('FORM10FA').then(function (rows) {
            console.log(rows)
            event.returnValue = rows;
        })
    } catch (err) {
        console.log(err)
        throw err;
    }
});


ipcMain.on('app_version', (event) => {
    event.sender.send('app_version', { version: app.getVersion() });
  });
  
  autoUpdater.on('update-available', () => {
    mainWindow.webContents.send('update_available');
  });
  
  autoUpdater.on('update-downloaded', () => {
    mainWindow.webContents.send('update_downloaded');
  });
  
  ipcMain.on('restart_app', () => {
    autoUpdater.quitAndInstall();
  });
  
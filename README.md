# LeetCode by JavaScript

用來練習 LeetCode 的離線環境

## First Set up

### 安裝 NodeJS / Install NodeJS

We using the cURL to install `nvm`:

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
```

If you use the nvm show this error `nvm: command not found`. you can add the command to the `.bash_profile` file. try `touch ~/.bask_profile` to create and try install again. If not working open the `.bash_profile` and add this:

```bash
source ~/.bashrc
```

Now you can check `nvm` and show now version:

```bash
nvm list
```

Check remote version

```bash
nvm ls-remote

nvm ls-remote 10
```

Install NodeJS Version

```bash
nvm install 10.15.3
```

Set default version

```bash
nvm alias default 10.15.3

nvm alias [name] 10.15.3
```

Use the version

```bash
nvm use 10.15.3

nvm use [name]
```

### Install Test package

```bash
npm install jest -g
```

### Run Test

Go to LC folder

```bash
cd practice/
```

Test Project

```bash
jest LC1_TwoSum --watch
```

### Check List

- #1 Two Sum (Done)
- #2 Add Two Numbers (Done)
- #3 Longest Substring Without Repeating Characters (Done))

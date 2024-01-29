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

nvm ls-remote 20
```

Install NodeJS Version

```bash
nvm install 20.9.0
```

Set default version

```bash
nvm alias default 20.9.0

nvm alias [name] 20.9.0
```

Use the version

```bash
nvm use 20.9.0

nvm use [name]
```

### Install Test package

```bash
yarn add --dev jest
```

### Run Test

Test Project

```bash
yarn test practice/LC1_TwoSum
```

### Check List

- #1 Two Sum (Done)
- #2 Add Two Numbers (Done)
- #3 Longest Substring Without Repeating Characters (Done)
- #4 Longest Palindrome (Done)
- #5 Palindrome Number (WIP)
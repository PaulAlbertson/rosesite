# Rosetta.com

## Local

#### MAMP / Virtual Host

Add entry to your hosts file:

> /private/etc/hosts

```
127.0.0.1     local.rosetta.com
```

Point to where your files are located in:

> /Applications/MAMP/conf/apache/extra/httpd-vhosts.conf

```
<VirtualHost *:80>
  DocumentRoot "/Users/[user]/[path-to-site]/target"
  ServerName local.rosetta.com
</VirtualHost>
```

MAMP settings:

- Apache Port: 80
- Nginx Port: 8080
- MySQL Port: 3306
- Document Root: set to the one level above the **rosetta-com** folder

#### Build

- `npm install` to install gulp plugins
- `grunt dev watch` to run builds
- View site at [local.rosetta.com](http://local.rosetta.com)

## URLs

- Dev: [http://rosemk-www-01-d1-wb01.wwwa.com/](http://rosemk-www-01-d1-wb01.wwwa.com/)
- Staging: [http://rosemk-www-01-s1-wb01.wwwa.com/](http://rosemk-www-01-s1-wb01.wwwa.com/)
- QA: [http://rosemk-www-01-q1-wb01.wwwa.com/](http://rosemk-www-01-q1-wb01.wwwa.com/)
- Prod: [http://rosemk-www-01-p1-wb01.wwwa.com/](http://rosemk-www-01-p1-wb01.wwwa.com/)

## Jenkins

[https://rosemk-build-01-p1.wwwa.com/](https://rosemk-build-01-p1.wwwa.com/)

## Akamai

After pushing to http://rosemk-www-01-p1-wb01.wwwa.com and verifying that the changes are correct, log in to [Akamai](https://control.akamai.com/EdgeAuth/logindirect.jsp) and follow these steps to flush the cache:

1. Publish > Content Control Utility
2. Content to Refresh > select **[Use with Caution!] Refresh ALL URLs/ARLs Associated with Specific CP Codes >>**
3. Enter your email in the **Notification** box
4. Click **Start Refreshing Content**
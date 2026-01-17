# ZIJIN GLOBAL DIGITALFO Website Deployment Guide

## 1. GitHub Repository Setup
The repository has been created at: **https://github.com/jtsgai/zijifo**

## 2. Publish Code
1. Click the **Publish** button in the top right corner of the Manus interface.
2. Connect your GitHub account.
3. Select the repository `jtsgai/zijifo`.
4. Confirm publish.

## 3. Configure GitHub Pages
1. Go to your repository settings: https://github.com/jtsgai/zijifo/settings/pages
2. Under **Build and deployment**, select **GitHub Actions** as the source.
3. GitHub will automatically detect the workflow. If not, you can use the provided `.github/workflows/deploy.yml` file.

## 4. Domain Configuration (Namecheap)
1. Log in to your Namecheap account.
2. Go to **Domain List** -> Manage `zijinfo.com` -> **Advanced DNS**.
3. Add the following records:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME Record | www | jtsgai.github.io | Automatic |
| A Record | @ | 185.199.108.153 | Automatic |
| A Record | @ | 185.199.109.153 | Automatic |
| A Record | @ | 185.199.110.153 | Automatic |
| A Record | @ | 185.199.111.153 | Automatic |

4. Back in GitHub Pages settings, enter `www.zijinfo.com` in the **Custom domain** field and click **Save**.
5. Check **Enforce HTTPS**.

## 5. Verification
Wait for a few minutes (DNS propagation can take up to 24 hours, but usually happens within minutes).
Visit **https://www.zijinfo.com** to see your live website.

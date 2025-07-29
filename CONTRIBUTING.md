# How to Contribute

We'd love to accept your patches and contributions to this project. There are
just a few small guidelines you need to follow.

## Contributor License Agreement

Contributions to this project must be accompanied by a Contributor License
Agreement. You (or your employer) retain the copyright to your contribution;
this simply gives us permission to use and redistribute your contributions as
part of the project. Head over to <https://cla.developers.google.com/> to see
your current agreements on file or to sign a new one.

You generally only need to submit a CLA once, so if you've already submitted one
(even if it was for a different project), you probably don't need to do it
again.

## Code reviews

All submissions, including submissions by project members, require review. We
use GitHub pull requests for this purpose. Consult
[GitHub Help](https://help.github.com/articles/about-pull-requests/) for more
information on using pull requests.

## Local Development

To develop this theme locally, you can link it to a Hugo site (like the [academy starter template](https://github.com/layer5io/academy-example)) using a `replace` directive in the site's `go.mod` file.

1.  **Directory Setup**

    Ensure you have cloned both this theme repository and your Hugo site repository into the same parent directory. Your folder structure should look like this:
    ```
    my-academy-content/
    ├── academy-example/     <-- Your content project
    └── academy-theme/  <-- This theme project
    ```

2.  **Modify `go.mod`**

    In your site's (`academy-example/`) `go.mod` file, add the following `replace` directive to point to your local theme folder:
    ```go
    replace github.com/layer5io/academy-theme => ../academy-theme
    ```

3.  **Run the Server**
    Now, when you run `make site` from within your site's directory, Hugo will use your local theme files instead of fetching the remote module, allowing you to see your changes live.

## Updating the Theme

To ensure you have the latest version of the theme or to upgrade to a newer release, follow these steps:

1.  **Update Go Module**
    Navigate to your Hugo site's root directory (e.g., `academy-example/`) in your terminal. Run the following command to update the theme module:
    ```bash
    go get -u github.com/layer5io/academy-theme
    ```
    This command will fetch the latest version of the theme and update your `go.mod` and `go.sum` files accordingly.


2.  **Rebuild Your Site**
    After updating the theme, rebuild your Hugo site to incorporate the changes:

    ```bash
    make site
    ```

    Sometimes, Hugo's cache might prevent the latest changes from being fully reflected.Try to clear the cache then ensure a fresh build:

    ```bash
    make clean
    ```

    Your site should now be running with the updated theme.

    For detailed guide, check：
    [Creating your learning path – ongoing maintenance and updates](https://docs.layer5.io/cloud/academy/creating-your-learning-path/#6-ongoing-maintenance-and-updates)
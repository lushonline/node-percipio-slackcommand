# node-percipio-slackcommand

This package makes it easy to search for content on your Percipio Site via a Slack [Slash Command](https://api.slack.com/slash-commands).

## Requirements

1. A publically accessible server running node.js (or abilty to reverse proxy back to your node server) - for testing you can use [ngrok](https://ngrok.com/)
1. A Skillsoft [Percipio](https://www.skillsoft.com/platform-solution/percipio/) Site
1. A [Percipio Service Account](https://documentation.skillsoft.com/en_us/pes/3_services/service_accounts/pes_service_accounts.htm) with permission for accessing [CONTENT DISCOVERY API](https://documentation.skillsoft.com/en_us/pes/2_understanding_percipio/rest_api/pes_rest_api.htm)

## Configuration

### Slack

Create a new [Slash Command](https://api.slack.com/slash-commands)

| Configuration       | Value                                                                                                       |
| ------------------- | ----------------------------------------------------------------------------------------------------------- |
| `Command`           | For the rest of these instructions we assume it is `/percipio`                                              |
| `Request URL`       | Your hostname where you host the application followed by /slack (i.e http://myserver.public.internet/slack) |
| `Short Description` | Search Percipio site for top 3 hits                                                                         |
| `Usage Hint`        | `<subject> [prefer:READ or WATCH or LISTEN or PRACTICE]`                                                    |

### Application

Once you have copied this reporsitory set the following NODE ENV variables:

- PERCIPIOSITE - This is the Base URI for your Percipio site (i.e. https://{customer}.percipio.com)
- CUSTOMER_ORGID - This is the Percipio Organiation UUID for your Percipio Site
- CUSTOMER_BEARER - This is the Percipio Bearer token for a Service Account with permissions for CONTENT DISCOVERY services.
- SLACK_SIGNING_SECRET - This is the Slack Signing Secret created when setting up the Slash Command [https://api.slack.com/slash-commands](https://api.slack.com/slash-commands)

## How to use it

You can use the slack app to search your Percipio site, and get back the top three hits.

### Commands and Usage

We will assume you called the Slash Command `/percipio` when you set it up on Slack

| Command                               | Result                                                                                      |
| ------------------------------------- | ------------------------------------------------------------------------------------------- |
| `/percipio <subject>`                 | Get the top 3 hits from your site for `<subject>`                                           |
| `/percipio <subject> prefer:READ`     | Get the top 3 hits from your site for `<subject>` that are categorised as READ modality     |
| `/percipio <subject> prefer:WATCH`    | Get the top 3 hits from your site for `<subject>` that are categorised as WATCH modality    |
| `/percipio <subject> prefer:LISTEN`   | Get the top 3 hits from your site for `<subject>` that are categorised as LISTEN modality   |
| `/percipio <subject> prefer:PRACTICE` | Get the top 3 hits from your site for `<subject>` that are categorised as PRACTICE modality |

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

# SIP Call Flows from RFC 3665

## Overview

RFC 3665 provides detailed examples of Session Initiation Protocol (SIP) call flows. These call flows show the message exchanges between various SIP elements including:
- SIP User Agents (UAs)
- SIP Proxy Servers
- SIP Redirect Servers

The document covers various scenarios including:
- SIP Registration
- Session Establishment
- Authentication
- Call failures and error handling

## Key Call Flow Scenarios

### SIP Registration
- Successful New Registration
- Update of Contact List
- Request for Current Contact List
- Cancellation of Registration
- Unsuccessful Registration

### Session Establishment
- Successful Session Establishment
- Session Establishment Through Two Proxies
- Session with Multiple Proxy Authentication
- Successful Session with Proxy Failure
- Session Through a SIP ALG
- Session via Redirect and Proxy Servers with SDP in ACK
- Session with re-INVITE (IP Address Change)

### Unsuccessful Sessions
- Unsuccessful No Answer
- Unsuccessful Busy
- Unsuccessful No Response from User Agent
- Unsuccessful Temporarily Unavailable

These call flows represent carefully checked and working group reviewed scenarios of the most basic examples as a companion to the SIP specifications.

## Importance for SIPp Testing

These standard call flows provide excellent templates for creating SIPp test scenarios, as they represent validated, standards-compliant SIP message exchanges that can be used to test SIP implementations.

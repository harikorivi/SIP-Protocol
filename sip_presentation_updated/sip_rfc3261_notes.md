# SIP: Session Initiation Protocol (RFC 3261) Notes

## Overview

RFC 3261 describes Session Initiation Protocol (SIP), an application-layer control (signaling) protocol for:
- Creating sessions
- Modifying sessions
- Terminating sessions with one or more participants

These sessions include:
- Internet telephone calls
- Multimedia distribution
- Multimedia conferences

## Key Features

- SIP invitations carry session descriptions that allow participants to agree on compatible media types
- SIP uses proxy servers to:
  - Route requests to user's current location
  - Authenticate and authorize users for services
  - Implement provider call-routing policies
  - Provide features to users
- SIP provides registration functionality allowing users to upload their current locations for use by proxy servers
- SIP runs on top of several different transport protocols

## Document Structure

The RFC 3261 document is organized into the following main sections:

1. Introduction (p.8)
2. Overview of SIP Functionality (p.9)
3. Terminology (p.10)
4. Overview of Operation (p.10)
5. Structure of the Protocol (p.18)
6. Definitions (p.20)
7. SIP Messages (p.26)
   - 7.1 Requests (p.27)
   - 7.2 Responses (p.28)
   - 7.3 Header Fields (p.29)
   - 7.4 Bodies (p.33)
   - 7.5 Framing SIP Messages (p.34)
8. General User Agent Behavior (p.34)
   - 8.1 UAC Behavior (p.35)
   - 8.2 UAS Behavior (p.46)
   - 8.3 Redirect Servers (p.51)
9. Canceling a Request (p.53)
10. Registrations (p.56)
11. Querying for Capabilities (p.66)
12. Dialogs (p.69)
13. Initiating a Session (p.77)

## SIP Components and Terminology

Need to extract detailed information about:
- User Agents (UA)
- Proxy Servers
- Registrar Servers
- Redirect Servers
- Back-to-Back User Agents (B2BUA)

## SIP Messages

SIP messages are either requests or responses:

### Requests
- INVITE: Initiates a session
- ACK: Confirms receipt of final response to INVITE
- BYE: Terminates a session
- CANCEL: Cancels a pending request
- REGISTER: Registers contact information
- OPTIONS: Queries server capabilities

### Responses
SIP responses are categorized by status codes:
- 1xx: Provisional/Informational
- 2xx: Success
- 3xx: Redirection
- 4xx: Client Error
- 5xx: Server Error
- 6xx: Global Failure

### Header Fields
SIP messages contain header fields that provide information about the message, sender, receiver, routing, and session.

## SIP Call Flows

Need to extract and document key call flows:
- Basic call setup
- Registration
- Authentication
- Call termination
- Call transfer
- Call forwarding

## Further Research Needed

- Additional SIP-related RFCs that extend the core protocol
- SDP (Session Description Protocol) used with SIP
- Security considerations
- NAT traversal mechanisms

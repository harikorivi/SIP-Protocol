# SIPp Testing Tool Research

## Overview

SIPp is a free Open Source test tool and traffic generator for the SIP protocol. It was originally developed by Hewlett-Packard and is now maintained by an open-source community. SIPp is designed to test various real SIP equipment including:

- SIP proxies
- B2BUAs (Back-to-Back User Agents)
- SIP media servers
- SIP/x gateways
- SIP PBXs

## Key Features

- **Built-in Scenarios**: Includes basic SipStone user agent scenarios (UAC and UAS)
- **Custom XML Scenarios**: Allows creation of custom test scenarios using XML
- **Performance Testing**: Establishes and releases multiple calls with INVITE and BYE methods
- **Statistics Display**: Shows dynamic statistics about running tests (call rate, round trip delay, message statistics)
- **CSV Statistics**: Provides periodic CSV statistics dumps
- **Transport Support**: Supports TCP and UDP over multiple sockets or multiplexed with retransmission management
- **Scenario Flexibility**: Supports regular expressions and variables in scenario files
- **Call Rate Control**: Offers dynamically adjustable call rates
- **Media Handling**: Supports RTP echo, RTP streaming, and PCAP play for media simulation

## Installation

SIPp can be installed on Linux and Cygwin platforms. Installation options include:

1. **Basic Installation**: Without TLS, SCTP, or PCAP support
2. **With TLS Support**: Requires OpenSSL library (>=0.9.8)
3. **With PCAP Support**: For media playback capabilities
4. **With SCTP Support**: For SCTP transport protocol

## XML Scenario Structure

SIPp scenarios are defined in XML files with the following structure:

- Root XML tag is named `scenario` with a `name` attribute
- Key commands include:
  - `<send>`: Send a SIP message or response
  - `<recv>`: Wait for a SIP message or response
  - `<pause>`: Pause the scenario execution
  - `<nop>`: No operation at SIP signaling level, just a tag for actions
  - `<label>`: Used for branching to specific parts in scenarios

## Example Scenarios

SIPp includes several built-in scenarios and supports custom scenarios. Common scenarios include:

1. **Basic UAC (User Agent Client)**: Initiates a call with INVITE, receives responses, sends ACK, waits, then sends BYE
2. **Basic UAS (User Agent Server)**: Receives INVITE, sends responses, receives ACK, receives BYE, sends 200 OK
3. **Call with Media**: Similar to basic scenarios but with media handling
4. **Authentication**: Scenarios with SIP authentication
5. **3PCC (Third Party Call Control)**: For testing B2BUA functionality

## Command Line Options

SIPp offers numerous command line options for controlling test execution:

- `-sn <scenario>`: Use a built-in scenario
- `-sf <scenario-file>`: Load a custom scenario file
- `-i <local_ip>`: Set local IP address
- `-p <local_port>`: Set local port
- `-mi <media_ip>`: Set media IP address
- `-mp <media_port>`: Set media port
- `-l <max_calls>`: Set maximum number of simultaneous calls
- `-m <calls>`: Stop test after processing specified number of calls
- `-trace_msg`: Dump sent and received SIP messages to log file
- `-trace_err`: Trace unexpected messages to log file

## Transport Modes

SIPp supports various transport modes:

- UDP mono/multi socket
- UDP with one socket per IP address
- TCP mono/multi socket
- TLS mono/multi socket
- SCTP mono/multi socket
- IPv6 support

## Media Handling

SIPp can handle media in several ways:

- **RTP Echo**: Echo back received RTP packets
- **RTP Streaming**: Send RTP stream from a specified file
- **PCAP Play**: Play back captured media from PCAP files

## Performance Testing

SIPp is particularly useful for performance testing SIP implementations:

- Can simulate thousands of user agents
- Provides detailed statistics on call success rates and response times
- Allows for stress testing with high call volumes
- Supports CSV output for analysis in spreadsheet applications

## Relevance to SIP Presentation

The SIPp tool is essential for demonstrating SIP protocol functionality because:

1. It allows creation of realistic SIP call scenarios
2. It can demonstrate various SIP message flows
3. It provides a way to test and validate SIP implementations
4. It can be used to show SIP authentication, registration, and session establishment
5. It helps visualize SIP call flows through its XML scenario definitions

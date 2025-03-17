# Speaking Script: SIP Call Flows Section

## SIP Call Flows Slide
"Now that we understand SIP messages, let's see how they work together in real-world scenarios. SIP call flows illustrate the sequence of messages exchanged between different entities during various SIP operations. These diagrams are invaluable for understanding how SIP works in practice and for troubleshooting issues in SIP networks.

We'll examine four common call flows: basic call setup and termination, registration, authentication, and call transfer. These examples cover the most fundamental operations in SIP communications."

## Basic Call Flow
"Let's start with the basic SIP call flow, which involves three main phases: session establishment, media exchange, and session termination.

Looking at the diagram on the right, you can see the message exchange between a User Agent Client (the caller), a SIP Proxy, and a User Agent Server (the callee).

The session establishment phase begins when the caller sends an INVITE request to the proxy. This INVITE contains an SDP offer with the caller's media capabilities - what codecs they support, what IP address and ports they'll use for media, and so on.

The proxy responds with a 100 Trying message to acknowledge receipt of the INVITE and to stop retransmissions. This is important because SIP can run over UDP, which doesn't guarantee delivery.

The proxy then forwards the INVITE to the callee. When the callee's phone starts ringing, it sends back a 180 Ringing response. This is forwarded back to the caller, who typically plays a ringback tone.

When the callee answers the call, their device sends a 200 OK response containing an SDP answer with their media capabilities. This is forwarded back to the caller.

The caller then sends an ACK to complete the three-way handshake of the INVITE transaction. At this point, the session is established, and the media exchange phase begins.

During the media exchange phase, RTP (Real-time Transport Protocol) packets carry the actual audio or video content directly between the endpoints. SIP is not involved in this phase except for any mid-call signaling that might be needed.

When either party wants to end the call, they send a BYE request. In our diagram, the caller initiates the termination by sending a BYE to the proxy, which forwards it to the callee. The callee responds with a 200 OK, acknowledging the termination, and the session ends.

This basic flow is the foundation of SIP communications, and understanding it is crucial for working with SIP systems."

## Registration Flow
"The next call flow we'll examine is the registration process. Registration is how a user agent informs a SIP registrar of its current location, allowing incoming calls to be routed correctly.

In the diagram, you can see the exchange between a User Agent and a SIP Registrar. The process typically involves an initial REGISTER request, a challenge for authentication, and a second REGISTER request with credentials.

The User Agent begins by sending a REGISTER request to the registrar. This request includes the user's address-of-record (like sip:alice@domain.com) and a Contact header with the user's current location (like sip:alice@192.168.1.100).

The registrar typically responds with a 401 Unauthorized message, challenging the user agent to provide authentication credentials. This challenge includes a WWW-Authenticate header with parameters like realm and nonce that the user agent needs for calculating a response.

The User Agent then sends a second REGISTER request, this time including an Authorization header with the calculated response based on the user's credentials and the challenge parameters. If the authentication is successful, the registrar responds with a 200 OK, confirming that the registration has been accepted.

The Expires header in the REGISTER request and response indicates how long the registration is valid. User agents typically refresh their registrations periodically before they expire.

Registration is essential in SIP because it allows users to be reached at different devices or locations while maintaining a consistent address-of-record. Without registration, SIP would be limited to direct point-to-point communications."

## Authentication Flow
"Authentication is a critical aspect of SIP security, and it's used in various SIP operations, not just registration. Let's examine a typical authentication flow in the context of an INVITE request.

In the diagram, you can see an exchange between a User Agent Client, a SIP Proxy requiring authentication, and a User Agent Server.

The process begins when the UAC sends an INVITE request to the proxy. Since the proxy requires authentication, it responds with a 407 Proxy Authentication Required message. This is similar to the 401 Unauthorized response we saw in the registration flow, but it's specific to proxy authentication.

The challenge includes a Proxy-Authenticate header with parameters like realm, nonce, and algorithm that the UAC needs for calculating a response.

The UAC then sends a new INVITE request, this time including a Proxy-Authorization header with the calculated response based on the user's credentials and the challenge parameters. If the authentication is successful, the proxy forwards the INVITE to the UAS, and the call proceeds normally with 100 Trying, 180 Ringing, and eventually a 200 OK response.

The rest of the call flow follows the basic pattern we discussed earlier, with the ACK completing the INVITE transaction and establishing the session.

SIP supports several authentication mechanisms, with digest authentication being the most common. This method avoids sending passwords in clear text by using a hashing algorithm to create a digest of the credentials and challenge parameters."

## Call Transfer Flow
"The final call flow we'll examine is call transfer, which uses the REFER method to ask one party to initiate a new call to a third party.

In the diagram, we have three participants: Alice (the transferor), Bob (the transferee), and Charlie (the transfer target). Initially, Alice and Bob are in an established call.

When Alice wants to transfer Bob to Charlie, she sends a REFER request to Bob. This request includes a Refer-To header pointing to Charlie's URI and a Referred-By header identifying Alice as the transferor.

Bob acknowledges the REFER with a 202 Accepted response. He then establishes a subscription to receive notifications about the transfer's progress by sending NOTIFY requests to Alice. The first NOTIFY typically contains a SIP/2.0 100 Trying status.

Bob then initiates a new call to Charlie by sending an INVITE request. This INVITE includes a Referred-By header indicating that the call was transferred by Alice. The call establishment follows the standard flow: 180 Ringing, 200 OK, and ACK.

Once Bob and Charlie are connected, Bob sends a final NOTIFY to Alice with a SIP/2.0 200 OK status, indicating that the transfer was successful. Alice and Bob then terminate their original call with a BYE request and 200 OK response.

This call transfer mechanism is commonly used in features like attended transfer (where the transferor speaks to the transfer target before completing the transfer) and blind transfer (where the transferor immediately transfers the call without speaking to the transfer target).

Understanding these call flows is essential for implementing and troubleshooting SIP-based communications systems. They illustrate how the various SIP messages we discussed earlier work together to accomplish common tasks in real-world scenarios.

Now that we've covered the fundamental SIP call flows, let's move on to discuss the SIPp testing tool, which allows us to simulate these flows and test SIP implementations."

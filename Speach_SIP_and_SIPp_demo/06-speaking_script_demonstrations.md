# Speaking Script: SIPp Demonstrations Section

## SIPp Demonstrations Slide
"Now let's look at some practical demonstrations of how to use SIPp for testing SIP implementations. I'll walk you through several common testing scenarios, explaining the command-line parameters and what each demonstration accomplishes.

These examples will give you a solid foundation for using SIPp in your own testing environments. You can adapt these commands to suit your specific testing needs."

## Basic UAC Test
"Let's start with a basic User Agent Client test. This demonstration shows how to use SIPp to test a SIP server by generating calls as a UAC.

The command you see on the screen is:
```
sipp -sf uac_scenario.xml 192.168.1.10:5060 -s 1000 -l 10 -m 100 -r 10 -trace_msg
```

Let me explain what each parameter does:

The `-sf uac_scenario.xml` parameter specifies the scenario file to use. This is the XML file that defines the sequence of SIP messages to send and the expected responses.

`192.168.1.10:5060` is the target SIP server address and port. This is the system under test that will receive our simulated calls.

The `-s 1000` parameter sets the service to call, which is used in the To header of the SIP messages. In this case, we're calling extension 1000.

The `-l 10` parameter limits the maximum number of simultaneous calls to 10. This prevents overloading your test system.

The `-m 100` parameter tells SIPp to stop after 100 calls. Without this, SIPp would continue generating calls indefinitely.

The `-r 10` parameter sets the call rate to 10 calls per second. This determines how quickly SIPp will initiate new calls.

Finally, the `-trace_msg` parameter enables tracing of all sent and received messages, which is invaluable for debugging.

When you run this command, SIPp will generate 100 calls at a rate of 10 calls per second, with a maximum of 10 calls active at any time. This is a great way to test the basic functionality of a SIP server."

## UAS Test
"Next, let's look at how to use SIPp as a User Agent Server to receive and respond to SIP requests.

The command for this demonstration is:
```
sipp -sf uas_scenario.xml -p 5060 -mi 192.168.1.5 -trace_msg
```

The `-sf uas_scenario.xml` parameter specifies a UAS scenario file, which defines how to respond to incoming SIP requests.

The `-p 5060` parameter sets the local port to listen on for incoming SIP messages.

The `-mi 192.168.1.5` parameter specifies the local IP address to bind to. This is important in systems with multiple network interfaces.

And again, we use `-trace_msg` to trace all sent and received messages for debugging.

When you run this command, SIPp will act as a SIP server, listening for incoming requests and responding according to the scenario file. This is useful for testing SIP clients or for creating a test environment where you control both ends of the communication."

## Performance Testing
"Now let's look at a more advanced example: performance testing of a SIP server.

The command for this demonstration is:
```
sipp -sf uac_scenario.xml 192.168.1.10:5060 -l 1000 -m 10000 -r 100 -rp 1000 -trace_stat -stf stats.csv -fd 10
```

In addition to the parameters we've already discussed, this command includes:

The `-l 1000` parameter allows up to 1000 simultaneous calls, which is much higher than our basic test.

The `-m 10000` parameter tells SIPp to stop after 10,000 calls, allowing for a more comprehensive test.

The `-r 100` parameter sets the initial call rate to 100 calls per second, which is a significant load for most systems.

The `-rp 1000` parameter sets the rate period for statistics to 1000 milliseconds (1 second). This determines how often SIPp updates its internal statistics.

The `-trace_stat` parameter enables dumping of statistics to the screen during the test.

The `-stf stats.csv` parameter tells SIPp to write statistics to a CSV file, which you can later analyze in a spreadsheet program.

The `-fd 10` parameter sets the frequency of statistics dumps to every 10 calls.

This command creates a high-load test that will help you determine the performance limits of your SIP server. By analyzing the resulting statistics, you can identify bottlenecks and optimize your system."

## Media Testing
"Finally, let's look at how to use SIPp with RTP media capabilities for a more comprehensive test.

The command for this demonstration is:
```
sipp -sf uac_pcap.xml 192.168.1.10:5060 -s 1000 -l 5 -m 10 -r 1 -p 5061 -trace_msg -trace_screen -trace_err
```

The `-sf uac_pcap.xml` parameter specifies a scenario file that includes PCAP media. This scenario not only sends SIP messages but also plays RTP media from a PCAP file.

The `-p 5061` parameter sets the local port to use for SIP signaling.

The `-trace_screen` parameter displays sent and received messages on the screen in real-time.

The `-trace_err` parameter enables tracing of error logs, which is helpful for identifying issues.

The other parameters are similar to what we've seen before, but note that we're using a lower call rate and fewer calls since media testing is more resource-intensive.

This type of test is valuable when you need to verify not just the signaling aspects of your SIP implementation but also its media handling capabilities. It can help identify issues with codec negotiation, RTP handling, and media quality.

These demonstrations cover the most common use cases for SIPp, from basic functionality testing to performance testing and media testing. By combining these techniques and customizing the scenario files, you can create comprehensive test suites for your SIP implementations.

Now that we've seen how to use SIPp for testing, let's move on to discuss some advanced topics in SIP."

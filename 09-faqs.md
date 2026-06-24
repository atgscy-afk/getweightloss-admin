# FAQs & Troubleshooting

## Getting In

### Q: "Access Denied" when I log in

**A:** Your account needs to be set up with staff permissions. Contact your admin with:
- Your email address
- Your role (sales agent, support agent, manager, etc.)

### Q: I forgot my password

**A:** The system uses your **work Microsoft/Entra account**. Go to the login page and click "Can't access your account?" to reset through Microsoft.

### Q: Can I use the same login from the public site?

**A:** No. The admin portal has separate login (work account). Your member account is different.

---

## Searching & Finding

### Q: I searched but found no results

**A:** Try:
1. Use different keywords — maybe they go by a nickname
2. Check the email is spelled right
3. Search for phone number instead
4. Expand your **date range** filter
5. Clear filters and try again

### Q: How do I find an old order?

**A:** Go to **Orders** → **Orders List** and:
1. Click the **Date** filter
2. Enter the date the order was placed
3. Or search by **customer name** or **order #**

### Q: A customer isn't showing up as a "Member"

**A:** They might be a **guest customer** (didn't create an account). Go to **Orders** instead and search there.

---

## Orders & Refunds

### Q: How long do refunds take?

**A:** After you process a refund, it takes **3-5 business days** to appear in the customer's account (depends on their bank).

### Q: Can I issue a refund for an order that shipped?

**A:** Yes, but:
- ✅ Full refunds work anytime
- ✅ Partial refunds work anytime  
- ⚠️ Customer may still need to return the item (check your returns policy)

Add a note with the reason so customer support knows what happened.

### Q: An order is stuck in "Processing"

**A:** Check for a **Hold** flag:
1. View the order
2. Look for "Hold" or "Delay Flag"
3. If there's an active hold, click **Release Hold**

If no hold, check:
- Do you have permission to change status? (need `orders.edit`)
- Is there a note explaining why it's stuck?

### Q: Can I undo a status change?

**A:** No, status changes are permanent. But you can:
1. Change to a different status moving forward
2. Add a note explaining what happened
3. Check the **audit trail** to see who changed it and when

**Example:** If you marked "Shipped" by mistake, change it back to "Processing" immediately and add a note.

---

## Members & Contacts

### Q: Member email is wrong — can I fix it?

**A:** Yes, click **Edit** on their profile and update. Verify it matches what they signed up with (you can check the public site to confirm).

### Q: How do I get a member's phone number to call them?

**A:** Go to **Members** → find them → click **Calls & Contact** tab.

If they haven't provided a phone, try:
1. Check their **order contact info** (may be different)
2. Look for phone in any **chat history** they mentioned
3. Send them a message and ask to call

> **Privacy note:** Never share a member's contact info with other customers or outside the organization.

### Q: Can I delete a member record?

**A:** No. Member records are permanent (for compliance and audit reasons). If their account should be inactive, mark it with a note instead.

---

## Documents

### Q: A member uploaded the wrong document

**A:** Click **Reject** and explain:
- "This looks like a receipt, but we need ID proof"
- "Can you resubmit a clearer photo?"

They'll get a notification and can upload the right one.

### Q: A document is too blurry to read

**A:** Reject with reason:
- "Image is too blurry — please retake photo with better lighting and focus"

Give specific feedback so they know what to fix.

---

## Sales & Commissions

### Q: When does a commission get calculated?

**A:** When a **lead converts to an order**:
1. You assigned the lead
2. Customer placed an order
3. Order appears in **Orders** (usually same day)
4. Commission appears in **Commissions** (within 24 hours)

### Q: Can I edit a lead?

**A:** You can:
- ✅ Add notes
- ✅ Reassign to another agent
- ❌ Delete or change registration date

### Q: What if two agents worked the same lead?

**A:** Only the **assigned agent** gets commission. If there's a dispute, the **Audit Trail** shows who was assigned and when.

---

## Technical Issues

### Q: The page is loading very slowly

**A:** Try:
1. Refresh the page (`F5` or `Cmd+R`)
2. Close other browser tabs to free up memory
3. Clear your browser cache (see [Common Tasks](./08-common-tasks.md#browser-tips))
4. Try a different browser (Chrome, Firefox, Safari, Edge)
5. Contact IT if it continues

### Q: A button isn't working

**A:** Try:
1. Refresh the page
2. Log out and back in
3. Clear browser cache
4. Try a different browser
5. Contact IT

### Q: I got an error message

**A:** Note down:
- The **exact error text**
- What you were doing when it happened
- Any **order or customer number** involved

Send this info to IT for investigation.

### Q: The system logged me out

**A:** You might have:
- Been idle for 30+ minutes
- Another session opened on another device
- Session expired for security

Just log in again with your work account.

---

## General

### Q: Where do I report a bug?

**A:** Contact your admin or IT team with:
- What you tried to do
- What happened instead
- Screenshot (if helpful)
- Date and time it happened

### Q: I need more permissions

**A:** Ask your **manager or admin**. Tell them specifically:
- What permission you need (e.g., "orders.refund")
- Why you need it (e.g., "I need to process customer refunds")

### Q: Is there a way to undo something I did?

**A:** Depends on what you did:
- ✅ Order status change → change it back + add note
- ✅ Member note → edit the note
- ❌ Refund → cannot undo; contact IT
- ❌ Deleted note → cannot undo; contact IT

**When in doubt, ask your manager before taking action.**

### Q: Who do I call if I have an issue?

**A:** Escalation path:
1. Check [Common Tasks](./08-common-tasks.md) — your answer might be there
2. Ask your **team lead or manager** — they know your workflows best
3. Contact **IT or Admin** — for access, permissions, or bugs

---

**Still stuck?** We're here to help — don't hesitate to reach out to your team!

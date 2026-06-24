# Orders

## Overview

The Orders section lets you view, manage, and update customer orders. Every time a customer purchases something, a new order is created here.

## Viewing Orders

1. Go to **Orders** → **Orders List**
2. You'll see a table with all orders. Use filters to narrow down:

### Filters

| Filter | Does |
|--------|------|
| **Search** | Find by order #, customer name, or email |
| **Status** | Show orders by stage: Pending, Processing, Shipped, Complete, etc. |
| **Date Range** | Show orders from the last X days |

**Quick tip:** Search for status "Pending" to find orders waiting on action.

## Order Details

Click an **order number** to see the full order:

- **Customer info** — name, email, phone, address
- **Items ordered** — what they bought, quantities, prices
- **Order total** — subtotal, tax, shipping, discounts, final total
- **Status** — where the order is in the fulfillment cycle
- **Dates** — when placed, last updated, shipped date
- **Payment method** — how they paid
- **Refund info** — if any refunds have been issued

## Order Status

Orders move through these statuses:

| Status | Means | Your action |
|--------|-------|------------|
| **Pending** | Just placed, awaiting review | Check for issues, then move to "Processing" |
| **Processing** | Being prepared to ship | Pack items, arrange courier |
| **Shipped** | On its way to customer | Update customer, track delivery |
| **Complete** | Delivered successfully | Close out unless customer has issues |
| **Cancelled** | Customer cancelled or too old | Mark in notes why |

### Changing Status

1. Click on the order
2. Find the **Status** dropdown
3. Select the new status
4. Add a **note** (optional but recommended)
5. Click **Update**

> **Tip:** Always add a note when you change status. It helps others understand what happened. Example: "Shipped via DPD, tracking #123456"

## On-Order Actions

### Placing a Hold / Delay Flag

A **hold** pauses fulfillment. Use it when:
- Waiting for customer to provide missing info (like address confirmation)
- Waiting for payment verification
- Inventory is temporarily unavailable

**To place a hold:**
1. Click **Set Hold** on the order
2. Add a reason (visible to other staff)
3. Click **Confirm**

The order stays in "Processing" but won't ship until you release the hold.

**To release a hold:**
1. Click **Release Hold**
2. The order resumes normal flow

### Editing Items

If a customer asks to change their order (before it ships):

1. Go to the order detail
2. Click **Edit Items**
3. Adjust quantities or add/remove products
4. Update pricing if needed
5. Click **Save**

> ⚠️ **Warning:** You can only edit items if the order is still in "Pending" or "Processing" status.

### Issuing a Refund

Support managers and admins can refund orders.

1. Go to the order
2. Click **Issue Refund**
3. Select:
   - **Refund amount** — full or partial?
   - **Reason** — why? ("Customer request," "Damaged item," etc.)
4. Click **Process Refund**

The refund:
- Goes back to the customer's original payment method
- Takes 3-5 business days to show up
- Is logged in the order's audit trail

> **Note:** Some payment methods (gift cards, store credit) have different refund processes. Check with support if unsure.

## Contact Log (Calls & Chats)

On the order detail, you can see:

- **All customer contact** — calls, chats, emails
- **Timestamps** — when each contact happened
- **Notes** — what was discussed

This helps you understand customer issues and avoid repeating questions.

## Audit Trail

Scroll to the bottom of an order to see the **Audit Log**:

- Who made each change (support agent, admin)
- What changed (status, items, notes)
- When it happened
- Why (the note they left)

This is a complete history and cannot be edited.

## Common Tasks

### "Customer says they haven't received it"

1. Find the order, check **Status** — should be "Shipped"
2. Look for **tracking number** in the notes
3. Give tracking to customer, advise to check carrier website
4. If not shipped yet, check for a **Hold** — release if appropriate
5. Add a note: "Customer contacted about delivery status, provided tracking"

### "Customer wants to cancel"

1. Check order status
2. If **Pending** or **Processing** — you can cancel it:
   - Change status to "Cancelled"
   - Add note: "Cancelled per customer request on [date]"
3. If **Shipped or Complete** — refer to refund process (see "Issuing a Refund" above)

### "Customer wants to change items"

1. If still **Pending** — click **Edit Items**, adjust, save
2. If **Processing** — place a **Hold**, contact customer to confirm, edit items, release hold
3. If **Shipped or Complete** — not possible; offer refund + reorder instead

## Reports & Insights

Go to **Orders** → **Reports** to see:

- Order volume by date
- Status breakdown (how many pending, shipped, etc.)
- Refunds issued
- Top-selling products

Use this to spot trends or identify stuck orders.

---

**Next:** Learn about [Members](./04-members.md) to see customer profiles and history.

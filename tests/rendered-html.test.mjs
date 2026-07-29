import test from "node:test";
import assert from "node:assert/strict";
import worker from "../dist/server/index.js";

const render=()=>worker.fetch(new Request("http://localhost/"),{},{});

test("server-renders the Lumina sample dental site",async()=>{const response=await render();assert.equal(response.status,200);assert.match(response.headers.get("content-type")??"",/^text\/html\b/i);const html=await response.text();assert.match(html,/Lumina Dental Studio \| Sample Dental Clinic Website/);assert.match(html,/Feel good about your/);assert.match(html,/Ask Lumi/);assert.match(html,/Fictional sample website concept/);assert.doesNotMatch(html,/codex-preview|Your site is taking shape/i)});
test("includes essential sample patient actions",async()=>{const html=await(await render()).text();assert.match(html,/tel:\+15550148200/);assert.match(html,/Book an appointment/);assert.match(html,/Sample dental clinic concept/);assert.match(html,/no information is sent/i)});

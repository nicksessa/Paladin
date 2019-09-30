# Paladin
A text based RPG

## Landing Page

Present blurb and instruct the user to Login or Register

## Main Page

When a user logs in, show them a list of their characters (if any).

Allow the user to select one of their characters.

Allow the user to create a new character.

## Character Creation

Present a modal with the character creation fields.

1. Character Name (required and unique)
2. Health Points = 2d6 * 4

## Character Stats

1. Character Name
2. Health Points
3. Experience Points
4. Gold Pieces  (change to silver because I think silver is more realistic. Yes, I know, this is a fantasy game...)
5. Other Equipment
6. Piety Level
7. Rebellion Level
8. Monsters Slain
9. Number of Rumors
10. Bosses Slain
11. Quests Completed
12. Turns Completed
13. Retainers

Keep a log of all quests per turn.

## Start Game

Roll on the Journey Table

Roll | Result
---|---
1 | Crossroads. Roll on the Inn Table (2) or the Encounter Table (3). You choose which table to use.
2 | Roll on the Inn Table (2) or bypass and roll on the Journey Table (1) again. You choose which table to use.
3 | You are lost. If you have a Merchant retainer, he knows of a shortcut, treat as a result of 1 on this table instead. If you don’t have a merchant, roll on this table again with a +1.
4 | Roll on the Encounter Table (3).
5 | If the Rebellion Level is 4, roll on the Challenge Table (7). Otherwise, roll on the Encounter Table (3).
6 or more | If the Rebellion Level is 4, roll on the Challenge Table (7). Otherwise, roll on the Traitors Attack Table (4).


## Tables

1. Journey Table

2. Inn Table (roll d6)

Successfully completed side quests modify this roll as follows;
1 quest +1, 2-3 quests +2, 4 or more quests +3.

Roll | Result
---|---
1 | Your paladin is turned away, roll on the Journey Table (1) again.
2 | Save vs 6 (no modifiers) otherwise, if you have a retainer, one at random is killed in an ambush by ruffians. Deduct -1 from the Rumor Roll. No new retainers are available.
3 | Save vs 4 (no modifiers) otherwise, if you have coins, 3d6gp is stolen by a pickpocket. Deduct -1 from the Find Retainer roll.
4 | Greedy traders, all items cost double, and you sell treasures at half their value. Ignore this if you have a merchant retainer.
5 | Talkative innkeeper. Add +1 to the Rumor Roll.
6 | Add +1 to the Find Retainer roll if the roll is 5 or less.
7 | You get free food and lodging. Add +1 to the Find Retainer roll if the roll is 5 or less. New retainers are hired for 5gp.
8 | A wealthy noble donates 3d6 x 5gp to your worthy cause.

3. Encounter Table (roll 2d6)

You can spend exactly three rumors, after the roll is made, to modify the result up or down by 1 to 2, e.g., a 7 can become 5, 6, 8 or 9.

Roll | Result
---|---
2 | Morgana. She uses trickery so that you forget. Make 3 saves vs level 4. For each fail, lose 1 rumor. If there are more fails than
rumors, lose the ones you have and roll on the Challenge Table (7) . If all rolls pass, leave this encounter safely.
3 | Castle Perilous. Roll on the Castle Perilous Table (12).
4 | Village of Plague and Death. You can bypass it or help. If you help, make two saves vs level 3. If both fail, your paladin dies of
the plague. If any pass, roll for a piety point.

5 | Grail Castle. If you have no piety points, treat as encounter 7. Otherwise, you see the castle, shrouded in heavenly lights, and
hear angelic music! The old and maimed Fisher King asks you two questions, each one needing a Piety Test to answer. If you
pass both rolls, the holy grail appears in your hands! Roll on the Return to Camelot Table (11) If you have a broken Sword of
the Fisher King, it is mended, even if you fail the Piety Tests.
6 | Minions! Roll a d6, on a 1-4 roll on the Day Minions Table (6), on a 5-6 roll on the Night Minions Table (8).
7 | A knight issues a challenge! Roll on the Challenge Table (7) or visit a shrine, in which case you roll on the Pilgrimage Table (5).
8 | Minions! Roll a d6, on a 1-4 roll on the Day Minions Table (6), on a 5-6 roll on the Night Minions Table (8).
9 | A Heroic Quest. Roll on the Side Quest Table (9) or visit a shrine, in which case you roll on the Pilgrimage Table (5).
10 | Village of Poverty and Famine. You can bypass it or help. If you help, donate at least 50gp in value; roll for a piety point.
11 | Test of Piety. If you have no piety points, treat as encounter 4. Otherwise, roll on the Test of Piety Table (10).
12 | Merlin. He heals you and your retainers back to full strength. He also gives wise counsel, and you gain d6+1 rumors.



